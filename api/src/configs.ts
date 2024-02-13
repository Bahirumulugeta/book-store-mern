import { config } from "dotenv";
config({ path: ".env" });

export default {
  env: <string>process.env.NODE_ENV,
  db: {
    pgDB: <string>process.env.PG_DATABASE,
    pgHost: <string>process.env.PG_HOST,
    pgPort: process.env.PG_PORT as unknown as number,
    pgUser: <string>process.env.PG_USER,
    pgPassword: <string>process.env.PG_PASSWORD,
    pgMaxConnectionPool: process.env
      .PG_MAX_CONNECTION_POOL as unknown as number,
    pgConnectionTimeOut: <string>process.env.PG_CONNECTION_TIMEOUT_MILISECOND,
    pgIdelTimeOut: <string>process.env.PG_IDLE_TIMEOUT_MILISECOND,
  },
  jwt: {
    secret: <string>process.env.JWT_SECRET,
    expiresIn: <string>process.env.JWT_EXPIRESIN,
  },
};
