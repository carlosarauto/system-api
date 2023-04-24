import { Router } from 'express';
import {
  createUserController,
  deleteUserController,
  listUserController,
  retrieveUserController,
  updateUserController,
} from '../controllers';
import { validateSchemaMiddleware } from '../middlewares';
import { UserCreateSchema, UserUpdateRequestSchema } from '../schemas';

export const userRouter = Router();

userRouter.post(
  '',
  validateSchemaMiddleware(UserCreateSchema),
  createUserController,
);
userRouter.get('', listUserController);
userRouter.get('/:id', retrieveUserController);
userRouter.patch(
  '/:id',
  validateSchemaMiddleware(UserUpdateRequestSchema),
  updateUserController,
);
userRouter.delete('/:id', deleteUserController);
