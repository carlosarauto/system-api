import { Request, Response } from 'express';
import {
  createClientService,
  listClientService,
  retrieveClientService,
  updateClientService,
  deleteClientService,
} from '../services';

export const createClientController = async (req: Request, res: Response) => {
  const client = await createClientService(req.body);
  return res.status(201).json(client);
};

export const listClientController = async (req: Request, res: Response) => {
  const clients = await listClientService();
  return res.json(clients);
};

export const retrieveClientController = async (req: Request, res: Response) => {
  const client = await retrieveClientService(req.params.id);
  return res.json(client);
};

export const updateClientController = async (req: Request, res: Response) => {
  const client = await updateClientService(req.params.id, req.body);
  return res.json(client);
};

export const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);
  return res.status(204).json({});
};
