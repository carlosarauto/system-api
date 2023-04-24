import { Request, Response } from 'express';
import {
  createServiceService,
  deleteServiceService,
  listServiceService,
  retrieveServiceService,
  updateServiceService,
} from '../services';

export const createServiceController = async (req: Request, res: Response) => {
  const service = await createServiceService(req.body);
  return res.status(201).json(service);
};

export const listServiceController = async (req: Request, res: Response) => {
  const services = await listServiceService();
  return res.json(services);
};

export const retrieveServiceController = async (
  req: Request,
  res: Response,
) => {
  const service = await retrieveServiceService(req.params.id);
  return res.json(service);
};

export const updateServiceController = async (req: Request, res: Response) => {
  const service = await updateServiceService(req.params.id, req.body);
  return res.json(service);
};

export const deleteServiceController = async (req: Request, res: Response) => {
  await deleteServiceService(req.params.id);
  return res.status(204).json({});
};
