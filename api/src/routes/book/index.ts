import { Router } from "express";
const router = Router();
import { createBookValidation } from "./validation";
import { createBook, getAllBooks } from "../../controllers/book";
import validator from "../../utils/validator";

router
  .route("/")
  .post(validator(createBookValidation), createBook)
  .get(getAllBooks);

export default router;
