// Bcrypt
import bcrypt from "bcryptjs";

// compare password function
const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};

// Export compare password function
export default comparePassword;
