import IOrderDoc, { ICreateOrder } from "../types/order";
import pgDB from "../loaders/db";
export class Order {
  static async createOrder(data: ICreateOrder): Promise<IOrderDoc> {
    try {
      console.log("data",data)
      const order = await pgDB.query({
        name: "createOrder",
        text: `insert into orders ("user_id", "book_id","address","quantity", "total_price") values($1, $2, $3, $4, $5) RETURNING *`,
        values: [
          data.user_id,
          data.book_id,
          data.address,
          data.quantity,
          data.total_price,
        ],
      });

      // Return inserted row data
      return order.rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async getAllOrders(): Promise<IOrderDoc[]> {
    try {
      const { rows } = await pgDB.query({
        name: "fetchAllOrders",
        text: `SELECT orders.*, books.title AS book_title, users.full_name AS user_full_name
        FROM orders
        JOIN books ON orders.book_id = books.id
        JOIN users ON orders.user_id = users.id`,
      });
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async getOrderById(id: number): Promise<IOrderDoc> {
    try {
      const { rows } = await pgDB.query({
        name: "fetchOrderById",
        text: `select * from "orders" where id = $1`,
        values: [id],
      });
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async cancelOrder(id: number): Promise<boolean> {
      try {
        //Variable declaration
        let query_text = `UPDATE "orders" SET         
        status = COALESCE($1, status) 
        WHERE id = $2 RETURNING *`;
        // Execute query
        const { rows } = await pgDB.query({
          name: "updateOrderById",
          text: query_text,
          values: [
            "Cancelled",
            id
          ],
        });
        return rows[0]; // Return as json
    } catch (error) {
      throw error;
    }
  }
}
