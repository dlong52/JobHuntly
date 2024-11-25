import React, { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Logo } from "@/components";
import {
  Badge,
  Box,
  Divider,
  MenuItem,
  menuItemClasses,
  MenuList,
  Typography,
} from "@mui/material";
import { CommonAvatar, CommonIcon, CommonPopover } from "../../../ui";

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const AccountPopover = () => {
    return (
      <Box className="p-4 flex flex-col gap-4 min-w-[350px]">
        <Box className="flex gap-4">
          <CommonAvatar />
          <Box className="flex flex-col">
            <span className="text-primary font-semibold">{user?.username}</span>
            <span className="text-gray-500 text-sm">{user?.email}</span>
          </Box>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
            [`& .${menuItemClasses.root}`]: {
              p: 2,
              display: "flex",
              alignItems: "center",
              gap: 2,
              borderRadius: 0.75,
              bgcolor: "#54555513",
              lineHeight: "100%",
              "&:hover": { color: "#4640DE" },
              [`&.${menuItemClasses.selected}`]: {
                color: "#4640DE",
                bgcolor: "action.selected",
                fontWeight: "fontWeightSemiBold",
              },
            },
          }}
        >
          <MenuItem>
            <CommonIcon.EditOutlined  className="text-primary" />
            <span onClick={()=>{navigate('/profile')}}  className="text-[14px] font-medium">
              Cài đặt thông tin cá nhân
            </span>
          </MenuItem>
          <MenuItem>
            <CommonIcon.VisibilityOutlined className="text-primary" />
            <Link to={"/"} className="text-[14px] font-medium">
              Nhà tuyển dụng xem hồ sơ
            </Link>
          </MenuItem>
          <MenuItem>
            <CommonIcon.LockOutlined className="text-primary" />
            <Link to={"/"} className="text-[14px] font-medium">Đổi mật khẩu</Link>
          </MenuItem>
          <MenuItem>
            <CommonIcon.LogoutOutlined className="text-primary" />
            <span className="text-[14px] font-medium">Đăng xuất</span>
          </MenuItem>
        </MenuList>
      </Box>
    );
  };
  const NotifyPopover = () => {
    return (
      <Box className="p-4 flex flex-col gap-4 max-w-[350px]">
        <Box className="flex justify-between">
          <span className="font-bold text-[16px]">Thông báo</span>
          <span className="text-primary">Đánh dấu là đã đọc</span>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
            [`& .${menuItemClasses.root}`]: {
              p: 2,
              display: "flex",
              gap: 2,
              flexDirection: "column",
              borderRadius: 0.75,
              alignItems: "start",
              bgcolor: "#54555513",
              lineHeight: "100%",
              [`&.${menuItemClasses.selected}`]: {
                color: "#4640DE",
                bgcolor: "action.selected",
                fontWeight: "fontWeightSemiBold",
              },
            },
          }}
        >
          <MenuItem>
            <Link to={""} className="flex flex-col text-wrap gap-2 leading-6 group hover:text-primary text-[15px]">
              <span className="font-semibold">Nhà tuyển dụng vừa xem CV ứng tuyển của bạn</span>
              <span className="text-neutrals-100 group-hover:text-primary">Công ty CP UD&GPDN Netbase, Công ty Cổ Phần Giải Pháp và Ứng Dụng Doanh Nghiệp Netbase, Vừa xem CV của bạn</span>
            </Link>
            <span className="text-sm text-gray-600">10/10/2024</span>
          </MenuItem>
        </MenuList>
      </Box>
    );
  };
  return (
    <Fragment>
      <Box
        className={`flex items-center justify-between fixed top-0 left-0 right-0 h-header z-50 ${
          isScrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <Box className="container mx-auto flex items-center justify-between">
          <Box className=" flex items-center gap-12">
            <Link to={"/"} className="flex items-center">
              <Logo />
            </Link>
            <Box className="flex items-center gap-6 font-medium text-neutrals-100">
              <Link to={"/jobs"}>Việc làm</Link>
              <Link to={"/company"}>Doanh nghiệp</Link>
              <Link to={"/cv-template"}>Tạo CV</Link>
            </Box>
          </Box>
          <Box className="flex items-center gap-8">
            {!user.username && (
              <Fragment>
                <Link
                  to={"/sign-in"}
                  className="text-primary font-semibold text-base"
                >
                  Đăng nhập
                </Link>
                <Link
                  to={"/sign-up"}
                  className="bg-primary text-white px-4 py-2 rounded font-semibold text-base"
                >
                  Đăng ký
                </Link>
              </Fragment>
            )}
            {user.username && (
              <Box className="flex items-center gap-6">
                <CommonPopover
                  body={<NotifyPopover />}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  zIndex={1300}
                  onClick={() => console.log("Popover clicked!")}
                >
                  <Badge color="error" badgeContent={1000} max={99}>
                    <Box className="rounded-full size-[40px] text-primary bg-[#2121d120] flex justify-center items-center cursor-pointer">
                      <CommonIcon.Notifications />
                    </Box>
                  </Badge>
                </CommonPopover>

                <Badge color="secondary">
                  <Link to={""} className="rounded-full size-[40px] text-primary bg-[#2121d120] flex justify-center items-center">
                    <CommonIcon.QuestionAnswer />
                  </Link>
                </Badge>
                <CommonPopover
                  body={<AccountPopover />}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  zIndex={1300}
                  onClick={() => console.log("Popover clicked!")}
                >
                  <Box className="cursor-pointer" variant="contained">
                    <CommonAvatar />
                  </Box>
                </CommonPopover>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Header;
