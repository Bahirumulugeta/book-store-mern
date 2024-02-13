import express from "express";
// Global error handler
import geh from "../geh";

const app = express();
import userRouter from "../routes/user";
import bookRouter from "../routes/book";
import orderRouter from "../routes/order";
// Use third party middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/orders", orderRouter);

// Use global error handler
app.use(geh);
export default app;
