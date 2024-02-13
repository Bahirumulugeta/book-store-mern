import {
  createUserService,
  loginUserService,
  getAllUsersService,
} from "../services/user";
import { RequestHandler } from "express";
import { ICreateUser, ILoginUser } from "../types/user";
import hashPassword from "../utils/hashPassword";
import createToken from "../utils/createJwt";
export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = <ICreateUser>req.body;
    data.password = hashPassword(data.password);
    const user = await createUserService(data);

    // Response
    res.status(201).json({
      status: "Success",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
export const loginUser: RequestHandler = async (req, res, next) => {
  try {
    const data = <ILoginUser>req.body;
    const user = await loginUserService(data);
    const token = createToken({ id: user.id, role: "Customer" });

    // Response
    res.status(200).json({
      status: "Success",
      message: "Login successfully",
      data: { user, token },
    });
  } catch (error) {
    next(error);
  }
};
export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      status: "Success",
      data: users,
    });
  } catch (error) {
    next(error);
  }
};
