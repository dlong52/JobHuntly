import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import { bgAuth, Google } from "@/assets/images";
import { auth, provider, signInWithPopup } from "@/../firebaseConfig";

import { Logo } from "@/components";
import { Button } from "@/ui";
import FormikField from "@/components/CustomFieldsFormik/FormikField";
import InputField from "@/components/CustomFieldsFormik/InputField";

import { signIn, signInWithGoogle } from "@/services/AuthServices";
import * as UserServices from "@/services/UserServives";
import httpServices from "@/services/httpServices";

import { useNotifications } from "@/utils/notifications";
import helpers from "@/utils/helpers";
import { updateUser } from "@/redux/userSlice";
import { validationSchema } from "./validate";
import { useToggleDialog } from "../../hooks";
import DialogCustom from "../../components/Dialogs";
import ConfirmSignUpRole from "./components/ConfirmSignUpRole";
import { bgGrid } from "../../assets/images";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess, showError } = useNotifications();
  const [open, toggle, shouldRender] = useToggleDialog();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
      const res = await signInWithGoogle(token);
      if (res?.status === "success") {
        showSuccess(res?.message);
        navigate("/");
        return;
      }
      showError(res.message);
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      setIsLoading(true);
      await helpers.sleepTime(1500);
      const res = await signIn(values);
      if (res?.status === "success") {
        showSuccess(res?.message);
        httpServices.saveTokenSession(res?.data.access_token);
        if (res?.data.access_token) {
          handleGetUserDetails(res?.data.access_token);
        }
        navigate("/");
        setIsLoading(false);
        return;
      }
      showError(res.message);
      setIsLoading(false);
    } catch (error) {
      showError(error.message);
      setIsLoading(false);
    }
  };
  const handleGetUserDetails = async (token) => {
    const res = await UserServices.getDetailUser(token);
    dispatch(updateUser({ ...res?.data, accessToken: token }));
  };

  return (
    <Box className="w-full min-h-screen relative grid grid-cols-1 gap-10 md:grid-cols-12  bg-blue-950 p-10 bg-grid bg-no-repeat bg-contain bg-bottom">
      <Box className="col-span-6 flex flex-col items-center justify-center gap-y-4 px-4 md:px-0">
        <Box className="size-full bg-white flex flex-col items-center justify-center gap-y-4 px-4 md:px-0 rounded-xl">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Box className="w-[450px] flex flex-col gap-4">
            <Box className="flex bg-slate-50 justify-between rounded-md gap-3 p-2">
              <Link
                className="flex-1 text-center py-2 px-4 text-blue-600 font-semibold rounded-sm bg-white shadow-md hover:bg-blue-50"
                to={"/sign-in?user=candidate"}
              >
                Ứng viên
              </Link>
              <Link
                className="flex-1 text-center py-2 px-4 text-gray-600 font-semibold border-b-2 border-transparent hover:bg-blue-50"
                to={"/sign-in?user=employer"}
              >
                Nhà tuyển dụng
              </Link>
            </Box>
            <Box className="text-center">
              <h2 className="font-bold font-RedHatDisplay text-2xl text-neutrals-100 mb-2">
                Chào mừng bạn đã quay trở lại
              </h2>
            </Box>
            <Button
              onClick={handleGoogleLogin}
              size="large"
              color="#fff"
              sx={{ textTransform: "none" }}
              startIcon={<img src={Google} alt="Google" className="h-1/2" />}
            >
              Đăng nhập với Google
            </Button>
            <Box className="flex items-center w-full">
              <Divider className="flex-grow" />
              <Typography variant="body2" className="px-4 text-gray-500">
                hoặc
              </Typography>
              <Divider className="flex-grow" />
            </Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => {
                return (
                  <Form className="flex flex-col gap-4 w-[450px]">
                    <FormikField
                      name="email"
                      component={InputField}
                      size="small"
                      labelTop="Email"
                      placeholder="Nhập email của bạn"
                    />
                    <FormikField
                      name="password"
                      component={InputField}
                      size="small"
                      type="password"
                      labelTop="Mật khẩu"
                      placeholder="Nhập mật khẩu của bạn"
                    />
                    <Button
                      className="!bg-primary"
                      size="large"
                      type="submit"
                      isLoading={isLoading}
                    >
                      Đăng nhập
                    </Button>
                  </Form>
                );
              }}
            </Formik>
            <Box className="flex justify-center gap-2">
              <Typography className="text-gray-600">
                Bạn chưa có tài khoản?{" "}
              </Typography>
              <Typography
                onClick={toggle}
                className="text-active font-medium cursor-pointer"
              >
                Đăng ký
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="col-span-6 h-full flex justify-center items-center">
        <img
          className="h-3/4 bg-gradient-to-t from-[#ffffff] to-transparent rounded-b-full"
          src={bgAuth}
          alt=""
        />
      </Box>
      {shouldRender && (
        <DialogCustom toggle={toggle} open={open} body={ConfirmSignUpRole} />
      )}
    </Box>
  );
};

export default SignInPage;
