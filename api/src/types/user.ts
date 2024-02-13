export default interface IUserDoc {
  id: number;
  full_name: string;
  email: string;
  point: number;
  password: string;
  created_at: Date;
}

export interface ICreateUser {
  full_name: string;
  email: string;
  password: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}
