import { z } from 'zod';

export const ClientCreateSchema = z.object({
  name: z.string(),
  phone: z.string(),
});

export const ClientReturnSchema = ClientCreateSchema.extend({
  id: z.string(),
});

export const ClientUpdateRequestSchema = ClientCreateSchema.partial();

export const ClientArraySchema = ClientReturnSchema.array();
