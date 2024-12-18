const helpers = require("../utils/helpers");

// Import Services
const AuthServices = require("../services/AuthServices");
const JwtService = require("../services/JwtServices");

const signUp = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, role, account_type } =
      req.body;
    const { isValid, errors } = helpers.validate(
      email,
      password,
      confirmPassword
    );

    if (isValid) {
      const result = await AuthServices.signUp({
        name,
        email,
        password,
        confirmPassword,
        role,
        account_type,
      });
      if (result.status === "success") return res.status(200).json(result);
      else return res.status(500).json(result);
    } else {
      return res.status(500).json({ status: "error", message: errors[0] });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return {
        status: "error",
        message: "Hãy nhập địa chỉ email và mật khẩu của bạn",
      };
    }
    const result = await AuthServices.signIn(req.body);
    const { refresh_token, ...newResult } = result;
    if (result.status === "success") {
      res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        secure: true,
        samsite: "None",
      });
      return res.status(200).json(newResult);
    } else {
      return res.status(500).json(result);
    }
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
const signInWithGoogle = async (req, res) => {
  const { token } = req.body;
  try {
    const result = await AuthServices.signInWithGoogle(token);
    const { refresh_token, ...newResult } = result;

    if (result.status === "success") {
      res.cookie("refresh_token", refresh_token, {
        httpOnly: true,
        secure: true,
        samsite: "None",
      });
      return res.status(200).json(newResult);
    } else {
      return res.status(500).json(result);
    }
  } catch (error) {
    console.error("Lỗi đăng nhập với Google:", error);
    return res
      .status(500)
      .json({ status: "error", message: "Unauthorized", error: error.message });
  }
};

const signOut = async (req, res, next) => {
  try {
    res.clearCookie("refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });
    return res.status(200).json({
      status: "success",
      message: "Logged out",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: error.message });
  }
};
const refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshtoken;
    if (!refreshToken) {
      return res.status(404).json({
        status: "error",
        message: "The refreshToken is require",
      });
    }
    const response = await JwtService.refreshTokenJwtService(refreshToken);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
module.exports = {
  signIn,
  signInWithGoogle,
  signUp,
  signOut,
  refreshToken,
};
