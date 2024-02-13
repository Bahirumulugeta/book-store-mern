import IUserDoc, {
  ICreateUser,
} from "../types/user";
import pgDB from "../loaders/db";
export class User {
  static async createUser(data: ICreateUser): Promise<ICreateUser> {
    try {
      // Send query
      const user = await pgDB.query({
        name: "createUser",
        text: `insert into users ("full_name", "email","password") values($1, $2,$3) RETURNING *`,
        values: [data.full_name, data.email, data.password],
      });

      // Return inserted row data
      return user.rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async findUserByEmail(email: string): Promise<IUserDoc> {
    try {
      
      const { rows } = await pgDB.query({
        name: "fetchUserByEmail",
        text: `select * from "users" where email = $1`,
        values: [email],
      });
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async getAllUsers(): Promise<IUserDoc[]> {
    try {
      const { rows } = await pgDB.query({
        name: "fetchAllUsers",
        text: "select * from users",
      });
      return rows;
    } catch (error) {
      throw error;
    }
  }
}
