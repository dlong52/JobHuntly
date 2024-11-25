import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import { Form, Formik } from "formik";

import { bgAuth, Google } from "@/assets/images";
import { Logo } from "@/components";
import { Button } from "@/ui";
import FormikField from "@/components/CustomFieldsFormik/FormikField";
import InputField from "@/components/CustomFieldsFormik/InputField";

import { auth, provider, signInWithPopup } from "@/../firebaseConfig";
import { signInWithGoogle, signUp } from "@/services/AuthServices";
import { useNotifications } from "@/utils/notifications";
import * as Yup from "yup";

const SignUpPage = () => {
  const [searchParams] = useSearchParams();
  const { showSuccess, showError } = useNotifications();
  const role = searchParams.get("role") || "candidate";
  const navigate = useNavigate();

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
      showError(res?.message);
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Họ tên là bắt buộc"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
    password: Yup.string()
      .min(6, "Mật khẩu phải ít nhất 6 ký tự")
      .required("Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
      .required("Mật khẩu xác nhận là bắt buộc"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role,
  };

  const handleSubmit = async (values) => {
    try {
      const res = await signUp(values);
      if (res?.status === "success") {
        showSuccess(res?.message);
        navigate(`/sign-in?role=${role}`);
        return;
      }
      showError(res?.message);
    } catch (error) {
      showError(error?.message);
    }
  };

  return (
    <Box className="w-full min-h-screen relative grid grid-cols-1 gap-10 md:grid-cols-12 bg-blue-950 p-10">
      <Box className="col-span-6 flex flex-col items-center justify-center gap-y-4 px-4 md:px-0">
        <Box className="size-full bg-white flex flex-col items-center justify-center gap-y-4 px-4 md:px-0 rounded-xl">
          <Link to={"/"}>
            <Logo />
          </Link>
          <Box className="w-[450px] flex flex-col gap-4">
           
            <Box className="text-center">
              <h2 className="font-bold font-RedHatDisplay text-2xl text-neutrals-100 mb-2">
                Tạo tài khoản mới
              </h2>
            </Box>
            <Button
              onClick={handleGoogleLogin}
              size="large"
              color="#fff"
              sx={{ textTransform: "none" }}
              startIcon={<img src={Google} alt="Google" className="h-1/2" />}
            >
              Đăng ký với Google
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
              {() => (
                <Form className="flex flex-col gap-4 w-[450px]">
                  <FormikField
                    name="name"
                    component={InputField}
                    size="small"
                    labelTop="Họ tên"
                    placeholder="Nhập họ tên của bạn"
                  />
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
                  <FormikField
                    name="confirmPassword"
                    component={InputField}
                    size="small"
                    type="password"
                    labelTop="Xác nhận mật khẩu"
                    placeholder="Nhập lại mật khẩu của bạn"
                  />
                  <Button
                    className="!bg-primary"
                    size="large"
                    type="submit"
                    // isLoading={isLoading}
                  >
                    Đăng ký
                  </Button>
                </Form>
              )}
            </Formik>
            <Box className="text-center">
              <span className="text-gray-600">Bạn đã có tài khoản? </span>
              <Link className="text-active font-medium" to={"/sign-in"}>
                Đăng nhập
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="col-span-6 h-full flex justify-center items-center">
        <img
          className="h-3/4 bg-gradient-to-t from-[#4640DE] to-transparent rounded-b-full"
          src={bgAuth}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default SignUpPage;
