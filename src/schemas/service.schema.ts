import { z } from 'zod';

export const ServiceCreateSchema = z.object({
  name: z.string(),
  price: z.number(),
});

export const ServiceUpdateRequestSchema = ServiceCreateSchema.partial();
