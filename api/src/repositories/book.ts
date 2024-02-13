import IBookDoc, { ICreateBook } from "../types/book";
import pgDB from "../loaders/db";

export class Book {
  static async createBook(data: ICreateBook): Promise<IBookDoc> {
    try {
      const book = await pgDB.query({
        name: "createBook",
        text: `insert into books ("title", "image","price","tags", "writer") values($1, $2,$3,$4,$5) RETURNING *`,
        values: [data.title, data.image, data.price, data.tags, data.writer],
      });

      // Return inserted row data
      return book.rows[0];
    } catch (error) {
      throw error;
    }
  }
  static async getAllBooks(): Promise<IBookDoc[]> {
    try {
      const text_query =
        "SELECT books.*, users.full_name AS writer_name, users.email AS writer_email FROM books INNER JOIN users ON books.writer = users.id";
      const { rows } = await pgDB.query({
        name: "fetchAllBooks",
        text: text_query,
      });
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}
