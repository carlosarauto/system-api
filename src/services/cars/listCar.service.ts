import prisma from '../../prisma';
import { CarArraySchema } from '../../schemas';

export const listCarService = async () => {
  const cars = await prisma.car.findMany();

  return CarArraySchema.parse(cars);
};
