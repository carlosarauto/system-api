import { Request, Response } from 'express';
import {
  createCarService,
  listCarService,
  retrieveCarService,
  updateCarService,
  deleteCarService,
} from '../services';

export const createCarController = async (req: Request, res: Response) => {
  const car = await createCarService(req.body, req.params.id);
  return res.status(201).json(car);
};

export const listCarController = async (req: Request, res: Response) => {
  const cars = await listCarService();
  return res.json(cars);
};

export const retrieveCarController = async (req: Request, res: Response) => {
  const car = await retrieveCarService(req.params.id);
  return res.json(car);
};

export const updateCarController = async (req: Request, res: Response) => {
  const car = await updateCarService(req.params.id, req.body);
  return res.json(car);
};

export const deleteCarController = async (req: Request, res: Response) => {
  await deleteCarService(req.params.id);
  return res.status(204).json({});
};
