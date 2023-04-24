import { Router } from 'express';
import {
  createCarController,
  listCarController,
  retrieveCarController,
  updateCarController,
  deleteCarController,
} from '../controllers';
import { validateSchemaMiddleware } from '../middlewares';
import { CarCreateSchema, CarUpdateRequestSchema } from '../schemas/car.schema';

export const carRouter = Router();

carRouter.post(
  '/:id',
  validateSchemaMiddleware(CarCreateSchema),
  createCarController,
);
carRouter.get('', listCarController);
carRouter.get('/:id', retrieveCarController);
carRouter.patch(
  '/:id',
  validateSchemaMiddleware(CarUpdateRequestSchema),
  updateCarController,
);
carRouter.delete('/:id', deleteCarController);
