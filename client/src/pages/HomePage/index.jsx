import React from "react";
import { cpLogo, lineBanner, Location, Search } from "@/assets/images";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../components";
import JobTrending from "../../components/JobTrending";
import { Button, CommonIcon } from "../../ui";
import { Box } from "@mui/material";
import { Form, Formik } from "formik";
import {
  FormikField,
  InputField,
  SelectField,
} from "../../components/CustomFieldsFormik";
const HomePage = () => {
  const categories = [null, null, null, null, null, null, null, null];
  const handleSuccess = () => {
    showSuccess("flkfdglsfd!");
  };
  return (
    <Box className="">
      <Box className="bg-banner bg-no-repeat bg-contain bg-right h-[700px] bg-neutrals-0 flex items-end">
        <Box
          className="container flex flex-col gap-6 justify-center mx-auto bg-banner-child bg-no-repeat bg-contain bg-right"
          style={{ height: "calc(100% - 75px)" }}
        >
          <Box className="">
            <h1 className="font-ClashDisplay font-semibold text-[72px] text-neutrals-100 leading-tight">
              Discover
              <br /> more than <br />
              <span className="text-accent-blue">5000+ Jobs</span>
              <img src={lineBanner} alt="" />
            </h1>
          </Box>
          <span className="max-w-[521px] text-neutrals-60 font-Epilogue text-[16px] leading-7">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </span>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="flex items-center bg-white rounded-sm shadow-lg w-fit p-4 gap-6">
                <Box className="flex items-center min-w-[300px] gap-2">
                  <img src={Search} alt="" />
                  <FormikField
                    name="name"
                    variant={"standard"}
                    component={InputField}
                    placeholder="Enter your name"
                    isFastField={false}
                  />
                </Box>
                <Box className="flex items-center min-w-[300px] gap-2">
                  <img src={Location} alt="" />
                  <FormikField
                    name="name"
                    variant={"standard"}
                    component={SelectField}
                    options={[
                      { value: "1", label: "Option 1" },
                      { value: "2", label: "Option 2" },
                      { value: "3", label: "Option 3" },
                    ]}
                    placeholder="Enter your name"
                    isFastField={false}
                  />
                </Box>
                <Button
                  sx={{
                    paddingX: 5,
                  }}
                  className="!bg-primary !text-white !text-nowrap font-semibold px-8 rounded-sm hover:bg-blue-600 transition-all"
                >
                  Tìm kiếm
                </Button>
              </Form>
            )}
          </Formik>
          {/* <Box className="flex bg-white rounded-sm shadow-lg w-fit p-4 gap-6">
            <Box className="flex items-center min-w-[300px] gap-2">
              <img src={Search} alt="search-icon" className=" text-gray-500" />
              <input
                type="text"
                placeholder="Vị trí ứng tuyển"
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400 border-b py-3 flex-1"
              />
            </Box>
            <Box className="flex items-center min-w-[300px] gap-2">
              <img src={Location} alt="" />
              <select
                name="industry"
                id="industry"
                className="flex-1 text-gray-600 py-3 border-b outline-none"
              >
                <option value="">Vị trí</option>
              </select>
            </Box>
            <button
              onClick={handleSuccess}
              className="bg-primary text-white font-semibold px-8 rounded-sm hover:bg-blue-600 transition-all"
            >
              Tìm kiếm
            </button>
          </Box> */}
        </Box>
      </Box>
      <Box className="container mx-auto pt-14">
        <Box className="flex items-center justify-between pb-8">
          <h1 className="font-ClashDisplay font-semibold text-3xl text-neutrals-100">
            Khám phá theo <span className="text-accent-blue"> ngành nghề</span>
          </h1>
          <Link className="font-semibold text-[16px] text-primary flex items-center gap-1">
            Hiển thị tất cả{" "}
            <CommonIcon.ArrowForwardRounded className="w-5 font-semibold" />
          </Link>
        </Box>
        <Box className="grid grid-cols-12 gap-6">
          {categories?.map((category, index) => (
            <Link
              key={index}
              to={"/"}
              className="col-span-3 border rounded-sm overflow-hidden"
            >
              <CategoryItem data={category} />
            </Link>
          ))}
        </Box>
      </Box>
      <Box className="container mx-auto pt-10">
        <JobTrending />
      </Box>
      <Box className="container mx-auto py-14">
        <Box className="flex items-center justify-between pb-8">
          <h1 className="font-ClashDisplay font-semibold text-3xl text-neutrals-100">
            Các việc làm <span className="text-accent-blue"> nổi bật</span>
          </h1>
          <Link className="font-semibold text-[16px] text-primary flex items-center gap-1">
            Hiển thị tất cả{" "}
            <CommonIcon.ArrowForwardRounded className="w-5 font-semibold" />
          </Link>
        </Box>
        <Box className="grid grid-cols-12 gap-6">
          {categories?.map((category, index) => (
            <Link
              key={index}
              to={"/"}
              className="col-span-3 border rounded-sm hover:shadow-lg hover:border-primary transition-all duration-200 overflow-hidden"
            >
              <Box className="p-5 flex flex-col gap-5">
                <Box className="flex justify-between items-center">
                  <img src={cpLogo} alt="" className="w-8" />
                  <span className="px-4 py-1 rounded-full text-sm border font-medium bg-[#4540de11] text-primary">
                    Thỏa thuận
                  </span>
                </Box>
                <Box className="flex flex-col">
                  <span className="font-semibold">Front End Developer</span>
                  <span className="text-neutrals-60">Next Level Solution</span>
                  <span className="font-medium text-neutrals-100">Hà Nội</span>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
