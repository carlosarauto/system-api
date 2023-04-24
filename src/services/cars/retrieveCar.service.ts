import { AppError } from '../../errors';
import prisma from '../../prisma';
import { CarReturnSchema } from '../../schemas';

export const retrieveCarService = async (id: string) => {
  const car = await prisma.car.findUnique({
    where: { id },
  });

  if (!car) {
    throw new AppError('car not found', 404);
  }

  return CarReturnSchema.parse(car);
};
