import { Pool, PoolClient, PoolConfig } from 'pg';
import config from '../configs';

// Create pool object
const poolConfig: PoolConfig = {
  user: config.db.pgUser,
  password: config.db.pgPassword,
  host: config.db.pgHost,
  port: config.db.pgPort,
  database: config.db.pgDB,
  max: config.db.pgMaxConnectionPool,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0,
};

const pool: Pool = new Pool(poolConfig);

pool.on("connect", () => {
  console.log(`DB connected`);
});

pool.on("acquire", () => {
  console.log(`Client checked out from pool`);
});

pool.on("remove", () => {
  console.log("Client is removed and closed from the pool");
});
pool.on('error', (err: Error, _client: PoolClient) => {
  console.error(err);
});

// Export pool object
export default pool;