import { createBookService, getAllBooksService } from "../services/book";
import { RequestHandler } from "express";
import { ICreateBook } from "../types/book";

export const createBook: RequestHandler = async (req, res, next) => {
  try {
    const data = <ICreateBook>req.body;
    const book = await createBookService(data);

    // Response
    res.status(201).json({
      status: "Success",
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBooks: RequestHandler = async (req, res, next) => {
  try {
    const books = await getAllBooksService();

    res.status(200).json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};
