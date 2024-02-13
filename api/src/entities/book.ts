import { PoolClient } from 'pg';

export default async function createBooksTable(dbConnectionPoolClient: PoolClient): Promise<void> {
  try {
    // Create books table
    await dbConnectionPoolClient.query({
      name: "createBooksTable",
      text: `CREATE TABLE books(
                  id SERIAL PRIMARY KEY,
                  title VARCHAR(1000) NOT NULL,
                  image TEXT,
                  price NUMERIC(15,2),
                  tags TEXT[],
                  writer INT NOT NULL REFERENCES users (id) on DELETE CASCADE,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`,
    });
  } catch (error) {
    throw error;
  }
}