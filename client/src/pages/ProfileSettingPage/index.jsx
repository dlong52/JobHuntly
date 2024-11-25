import { Form, Formik } from "formik";
import React from "react";
import FormikField from "../../components/CustomFieldsFormik/FormikField";
import InputField from "../../components/CustomFieldsFormik/InputField";
import { Button } from "@/ui";
import * as Yup from "yup";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CommonAvatar } from "../../ui";

const ProfileSettingPage = () => {
  const user = useSelector((state) => state.user);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tên là bắt buộc"),
    phone_number: Yup.string()
      .min(6, "Số điện thoại phải ít nhất 6 ký tự")
      .required("Số điện thoại là bắt buộc"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
  });

  const initialValues = {
    name: user?.username || "",
    phone_number: user?.phone_number || "",
    email: user?.email || "",
  };

  const handleSubmit = async (values) => {
    console.log("Form Values:", values);
    // Your submission logic here
  };

  return (
    <Box className="">
      <div className="h-header bg-white"></div>
      <Box className="container mx-auto my-10">
        <Box className="grid grid-cols-12 gap-10">
          <Box className="col-span-8 bg-white shadow-md rounded-md p-8">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-8 w-full">
                  <FormikField
                    name="name"
                    component={InputField}
                    size="small"
                    lableTop="Họ và tên"
                    placeholder="Nhập tên của bạn"
                  />
                  <FormikField
                    name="phone_number"
                    component={InputField}
                    size="small"
                    lableTop="Số điện thoại"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                  <FormikField
                    name="email"
                    component={InputField}
                    disabled={true}
                    size="small"
                    readOnly={true}
                    lableTop="Email"
                    placeholder="Nhập email của bạn"
                  />
                  <Button
                    size="large"
                    type="submit"
                    className="!font-medium !w-fit !text-sm !bg-active"
                  >
                    Lưu
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
          <Box className="col-span-4 bg-white shadow-md rounded-md p-8">
            <div className="flex gap-4 items-center">
              <CommonAvatar className="!size-[80px]" />
              <div className="flex flex-col">
                <span className="font-medium">Chào bạn trở lại,</span>
                <span className="font-semibold text-xl">{user?.username}</span>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileSettingPage;
