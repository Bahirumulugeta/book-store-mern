import { Router } from "express";
const router = Router();
import { createOrderValidation } from "./validation";
import {
  createOrder,
  getAllOrders,
  cancelOrder,
} from "../../controllers/order";
import validator from "../../utils/validator";
router.patch("/cancel-order/:id", cancelOrder);
router
  .route("/")
  .post(validator(createOrderValidation), createOrder)
  .get(getAllOrders);

export default router;
