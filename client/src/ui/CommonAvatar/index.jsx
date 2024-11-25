import { Avatar } from "@mui/material";
import React from "react";

const CommonAvatar = (props) => {
  const { className, src, char } = props;
  return <Avatar src={src} className={`!size-[40px] ${className}`}>{char}</Avatar>;
};

export default CommonAvatar;
