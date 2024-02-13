import {
  createOrderService,
  getAllOrdersService,
  cancelOrderService,
} from "../services/order";
import { RequestHandler } from "express";
import { ICreateOrder } from "../types/order";

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const data = <ICreateOrder>req.body;
    const order = await createOrderService(data);

    // Response
    res.status(201).json({
      status: "Success",
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllOrders: RequestHandler = async (req, res, next) => {
  try {
    const orders = await getAllOrdersService();

    res.status(200).json({
      status: "Success",
      data: orders,
    });
  } catch (error) {
    next(error);
  }
};

export const cancelOrder: RequestHandler = async (req, res, next) => {
  try {
    // get id from the request
    const id = req.params.id as unknown as number;
    const order = await cancelOrderService(id);

    res.status(200).json({
      status: order ? "Success" : "Failed",
      message: order ? "Cancelled successfully" : "Failed to cancel",
    });
  } catch (error) {
    next(error);
  }
};
