import { Router } from 'express';
import {
  createClientController,
  deleteClientController,
  listClientController,
  retrieveClientController,
  updateClientController,
} from '../controllers';
import { validateSchemaMiddleware } from '../middlewares';
import { ClientCreateSchema, ClientUpdateRequestSchema } from '../schemas';

export const clientRouter = Router();

clientRouter.post(
  '',
  validateSchemaMiddleware(ClientCreateSchema),
  createClientController,
);
clientRouter.get('', listClientController);
clientRouter.get('/:id', retrieveClientController);
clientRouter.patch(
  '/:id',
  validateSchemaMiddleware(ClientUpdateRequestSchema),
  updateClientController,
);
clientRouter.delete('/:id', deleteClientController);
