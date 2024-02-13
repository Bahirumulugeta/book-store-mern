import bcrytp from "bcryptjs";

export default (password: string) => {
  return bcrytp.hashSync(password, 12);
};
