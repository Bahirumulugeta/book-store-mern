import IOrderDoc, { ICreateOrder } from "../types/order";
import { Order } from "../repositories/order";
import AppError from "../utils/appError";
export const createOrderService = async (
  orderData: ICreateOrder
): Promise<IOrderDoc> => {
  return Order.createOrder(orderData);
};

export const getAllOrdersService = async (): Promise<IOrderDoc[]> => {
  return Order.getAllOrders();
};
export const cancelOrderService = async (id:number): Promise<boolean> => {
  // Get order by id to check if it exists or not
  const isExists = Order.getOrderById(id)
  if(!isExists)
  throw new AppError("Order not found with this id", 400);
  // Change status
  const order = Order.cancelOrder(id);
  return order;
};
