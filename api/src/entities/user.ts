import { PoolClient } from 'pg';

export default async function createUsersTable(dbConnectionPoolClient: PoolClient): Promise<void> {
  try {
    // Create users table
    await dbConnectionPoolClient.query({
      name: "createUsersTable",
      text: `CREATE TABLE users(
                  id SERIAL PRIMARY KEY,
                  full_name VARCHAR(100) NOT NULL,
                  email VARCHAR(250) UNIQUE,
                  password TEXT,
                  point NUMERIC(15,2) DEFAULT 100,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`,
    });
  } catch (error) {
    throw error;
  }
}