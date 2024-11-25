import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import publicRoutes from "./routes/publicRouter";
import { updateUser } from "./redux/userSlice";

import { MainLayout } from "./layouts";

import * as UserService from "./services/UserServives";
import httpSevices from "./services/httpServices";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const storageData = httpSevices.getTokenSession();
    if (storageData) {
      handleGetUserDetails(storageData);
    }
  }, []);
  const handleGetUserDetails = async (token) => {
    const res = await UserService.getDetailUser(token);
    dispatch(updateUser({ ...res?.data, accessToken: token }));
  };
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        const Page = route.component;
        let Layout = MainLayout;
        if (route.layout) Layout = route.layout;
        else if (route.layout === null) Layout = Fragment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
