import { AppError } from '../../errors';
import prisma from '../../prisma';

export const deleteServiceService = async (id: string) => {
  try {
    await prisma.service.delete({
      where: { id },
    });
  } catch {
    throw new AppError('service not found', 404);
  }
};
