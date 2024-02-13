import IBookDoc, { ICreateBook } from "../types/book";
import { Book } from "../repositories/book";
export const createBookService = async (
  bookData: ICreateBook
): Promise<ICreateBook> => {
  return Book.createBook(bookData);
};

export const getAllBooksService = async (): Promise<IBookDoc[]> => {
  return Book.getAllBooks();
};
