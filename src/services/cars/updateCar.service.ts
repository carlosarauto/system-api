import { AppError } from '../../errors';
import prisma from '../../prisma';
import { CarReturnSchema } from '../../schemas';
import { ICarUpdateRequest } from '../../interfaces';

export const updateCarService = async (
  id: string,
  { name }: ICarUpdateRequest,
) => {
  try {
    const car = await prisma.car.update({
      where: { id },
      data: {
        name,
      },
    });

    return CarReturnSchema.parse(car);
  } catch {
    throw new AppError('car not found', 404);
  }
};
