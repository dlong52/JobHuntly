import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import HttpService from '../services/httpServices';
import authServices from '../services/modules/Auth/authServices'
import { SIGN_IN } from '../constants/api';
import { useNotifications } from "../utils/notifications";
const AuthenticationContext = createContext({
  token: '',
  isLogged: false,
  isLoggingOut: false,
  login: () => {},
  logout: () => {},
  serviceSelected: '',
  chooseService: () => {},
  userInfo: {},
});

export const useAuthentication = () => useContext(AuthenticationContext);

let timerInterval = null;
const AuthProvider = ({ children }) => {
  //! State

  const tokenLocalStorage = HttpService.getTokenSession();
  const servicesLocalStorage = HttpService.getServiceStorage();
  const userInfoStorage = HttpService.getUserInfoStorage();
  


  const [isLogged, setIsLogged] = useState(tokenLocalStorage ? true : false);
  const [isLoggingOut, setLoggingOut] = useState(false);
  const [serviceSelected, setServiceSelected] = useState(servicesLocalStorage ? servicesLocalStorage : '');
  const [userInfo, setUserInfo] = useState(userInfoStorage || {});
  const [token, setToken] = useState(tokenLocalStorage || '');
  const { showSuccess, showError } = useNotifications();
  useEffect(() => {

    const service = HttpService.getServiceStorage();
    if (tokenLocalStorage) {
      setIsLogged(true);
      HttpService.attachTokenToHeader(tokenLocalStorage);
    }
    if (service) setServiceSelected(service);
  }, []);

  

  //! Function
  const chooseService = useCallback((arg) => {
    setServiceSelected(arg);
  }, []);

  const login = useCallback(async ({ username, password, remember, onLoading }) => {
    try {
      onLoading(true);

      //* Get access token
      const res = await HttpService.post(SIGN_IN, { username, password });
      const { access_token, user } = res.data.data;

      // remember && HttpService.saveTokenStorage(access_token);
      HttpService.saveTokenSession(access_token);
      HttpService.attachTokenToHeader(access_token);
      HttpService.saveUserInfoStorage(user);
      remember && HttpService.saveUserInfoLocalStorage(user);
      !remember && localStorage.removeItem('user');

      //* Get auth line
      const resDataLine = await authServices.getAuthLine();
      const { name: nameLine, password: passwordLine } = resDataLine?.data?.data;
    
      showSuccess('Login successfully');
      setToken(access_token);
      setUserInfo(user);
      setIsLogged(true);
      onLoading(false);
    } catch (error) {
      showError(error?.response?.data.messages[0] || 'Something went wrong');
      onLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    return new Promise(async (resolve, reject) => {
      try {
        setLoggingOut(true);
        HttpService.clearUserInfoStorage();
        HttpService.clearTokenSession();
        HttpService.clearServiceStorage();
        sessionStorage.removeItem('path');
        window.location.reload();
        resolve();
      } catch (error) {
        showError(error.toString());
        setLoggingOut(false);
        reject(error);
      }
    });
  }, []);

  //! Render
  const value = useMemo(() => {
    return {
      isLogged,
      isLoggingOut,
      login,
      logout,
      serviceSelected,
      chooseService,
      token,
      userInfo,
    };
  }, [isLogged, login, logout, serviceSelected, isLoggingOut, chooseService, token, userInfo]);

  return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>;
};

export default AuthProvider;
