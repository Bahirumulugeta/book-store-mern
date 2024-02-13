/**
 * - This file is used to create Json Web Token for login.
 */

// jwt
import jwt from "jsonwebtoken";

// Configs
import configs from "../configs";
interface IPayload {
  id: number;
  role: string;
}
// jwt token generator
const createToken = (payload: IPayload) => {
  // Create token
  const token = jwt.sign(
    { id: payload.id, role: payload.role },
    configs.jwt.secret,
    {
      expiresIn: configs.jwt.expiresIn,
    }
  );
  return token;
};
export default createToken;
