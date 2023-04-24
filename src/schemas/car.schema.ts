import { z } from 'zod';

const ImageCreateSchema = z.object({
  image: z.string(),
});

export const CarCreateSchema = z.object({
  name: z.string(),
  license_plate: z.string(),
  list_image: ImageCreateSchema.array(),
});

export const CarReturnSchema = CarCreateSchema.extend({
  id: z.string(),
}).omit({ list_image: true });

export const CarUpdateRequestSchema = CarCreateSchema.partial();

export const CarArraySchema = CarReturnSchema.array();
