import { AppError } from '../../errors';
import prisma from '../../prisma';

export const deleteCarService = async (id: string) => {
  try {
    await prisma.car.delete({
      where: { id },
    });
  } catch {
    throw new AppError('car not found', 404);
  }
};
