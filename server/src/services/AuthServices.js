const bcrypt = require("bcrypt");
const JwtServices = require("./JwtServices");
const UserModel = require("../models/UserModel");
const admin = require("../configs/firebase/firebaseAdmin");
const dotenv = require("dotenv");
dotenv.config();

const signUp = async (newUser) => {
  const { name, email, password, role, account_type } = newUser;
  try {
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return { status: "error", message: "Tài khoản này đã tồn tại!" };
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const createdUser = await UserModel.create({
      profile: {
        name: name,
      },
      email,
      password: hashPassword,
      role,
      account_type,
    });

    return {
      status: "success",
      message: "Tạo tài khoản thành công!",
      user: createdUser,
    };
  } catch (error) {
    console.error("Error creating user:", error);
    return { status: "error", message: error.message };
  }
};

const signIn = async (user) => {
  const { email, password } = user;
  try {
    const existingUser = await UserModel.findOne({ email: email });

    if (
      !existingUser ||
      existingUser.account_type === process.env.AUTH_TYPE_GG
    ) {
      return {
        status: "error",
        message: "Tài khoản này không tồn tại!",
        data: user,
      };
    }
    if (!existingUser?.active) {
      return {
        status: "error",
        message: "Tài khoản của bạn đã bị cấm!",
        data: user,
      };
    }
    const comparePassword = bcrypt.compareSync(password, existingUser.password);
    if (!comparePassword) {
      return { status: "error", message: "Mật khẩu của bạn không đúng!" };
    }

    const access_token = await JwtServices.generateAccessToken({
      id: existingUser._id,
      role: existingUser.role,
    });
    const refresh_token = await JwtServices.generateRefreshToken({
      id: existingUser._id,
      role: existingUser.role,
    });
    return {
      status: "success",
      message: "Đăng nhập thành công!",
      data: {
        access_token,
      },
      refresh_token,
    };
  } catch (error) {
    console.error("Lỗi đăng nhập:", error);
    return { status: "error", message: error.message };
  }
};

const signInWithGoogle = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email;
    const name = decodedToken.name;

    const user = await UserModel.findOne({ firebaseUid: uid });

    if (!user) {
      user = new UserModel({
        email: email,
        role: "candidate",
        firebaseUid: uid,
        account_type: "google",
        profile: {
          name: name,
        },
      });
      await user.save();
    }

    const access_token = await JwtServices.generateAccessToken({
      id: user._id,
      isAdmin: user.role === "admin1234",
    });
    const refresh_token = await JwtServices.generateRefreshToken({
      id: user._id,
      isAdmin: user.role === "admin1234",
    });
    return {
      status: "success",
      message: "Đăng nhập với Google thành công!",
      access_token,
      refresh_token,
      user,
    };
  } catch (error) {
    console.error("Lỗi đăng nhập với Google:", error);
    return { status: "error", message: error.message };
  }
};
module.exports = {
  signUp,
  signIn,
  signInWithGoogle,
};
