import { Request, Response } from 'express';

export const createOrderController = async (req: Request, res: Response) => {
  const order = await createOrderService(req.body);
  return res.status(201).json(order);
};

export const listOrderController = async (req: Request, res: Response) => {
  const orders = await listOrderService();
  return res.json(orders);
};

export const retrieveOrderController = async (req: Request, res: Response) => {
  const order = await retrieveOrderService(req.params.id);
  return res.json(order);
};

export const updateOrderController = async (req: Request, res: Response) => {
  const order = await updateOrderService(req.params.id, req.body);
  return res.json(order);
};

export const deleteOrderController = async (req: Request, res: Response) => {
  await deleteOrderService(req.params.id);
  return res.status(204).json({});
};
