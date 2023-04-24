import { z } from 'zod';

export const UserCreateSchema = z.object({
  name: z.string(),
  login: z.string(),
  password: z.string(),
});

export const UserReturnSchema = UserCreateSchema.extend({
  id: z.string(),
}).omit({ password: true });

export const UserUpdateRequestSchema = UserCreateSchema.partial();

export const UserArraySchema = UserReturnSchema.array();
