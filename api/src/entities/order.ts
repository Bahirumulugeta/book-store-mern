import { PoolClient } from 'pg';

export default async function createOrdersTable(dbConnectionPoolClient: PoolClient): Promise<void> {
  try {
    // Create orders table
    await dbConnectionPoolClient.query({
      name: "createOrdersTable",
      text: `CREATE TABLE orders(
                  id SERIAL PRIMARY KEY,
                  address VARCHAR(250) NOT NULL,
                  quantity INT NOT NULL,
                  total_price NUMERIC(15,2) NOT NULL,
                  user_id INT NOT NULL REFERENCES users (id) on DELETE CASCADE,
                  book_id INT NOT NULL REFERENCES books (id) on DELETE CASCADE,
                  "status" order_status DEFAULT 'Pending' NOT NULL,
                  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`,
    });
  } catch (error) {
    throw error;
  }
}