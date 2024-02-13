import IUserDoc, { ICreateUser, ILoginUser } from "../types/user";
import { User } from "../repositories/user";
import AppError from "../utils/appError";
import comparePassword from "../utils/comparePassword";
export const createUserService = async (
  userData: ICreateUser
): Promise<ICreateUser> => {
  try {
    return User.createUser(userData);
  } catch (err) {
    throw err;
  }
};
export const loginUserService = async (
  loginData: ILoginUser
): Promise<IUserDoc> => {
  try {
    // Check the email if exists or not
    const user = await User.findUserByEmail(loginData.email);
    if (!user) {
      throw new AppError("User not found with this email", 400);
    }
    if (!comparePassword(loginData.password, user.password)) {
      throw new AppError("Password is incorrect", 400);
    }
    return user;
  } catch (err) {
    throw err;
  }
};
export const getAllUsersService = async (): Promise<IUserDoc[]> => {
  return User.getAllUsers();
};
