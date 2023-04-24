import { z } from 'zod';

export const OrderCreateSchema = z.object({
  description: z.string().optional(),
  price: z.number(),
  services: z.array(z.object({ service: z.string() })),
  car_id: z.string().uuid(),
  client_id: z.string().uuid(),
});

export const OrderUpdateSchema = OrderCreateSchema.partial().omit({
  services: true,
  car_id: true,
  client_id: true,
});
