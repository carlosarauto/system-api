import { Router } from 'express';
import { validateSchemaMiddleware } from '../middlewares';
import { ServiceCreateSchema, ServiceUpdateRequestSchema } from '../schemas';
import {
  createServiceController,
  deleteServiceController,
  listServiceController,
  retrieveServiceController,
  updateServiceController,
} from '../controllers';

export const serviceRouter = Router();

serviceRouter.post(
  '',
  validateSchemaMiddleware(ServiceCreateSchema),
  createServiceController,
);
serviceRouter.get('', listServiceController);
serviceRouter.get('/:id', retrieveServiceController);
serviceRouter.patch(
  '/:id',
  validateSchemaMiddleware(ServiceUpdateRequestSchema),
  updateServiceController,
);
serviceRouter.delete('/:id', deleteServiceController);
