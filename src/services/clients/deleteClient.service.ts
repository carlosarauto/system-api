import { AppError } from '../../errors';
import prisma from '../../prisma';

export const deleteClientService = async (id: string) => {
  try {
    await prisma.client.delete({
      where: { id },
    });
  } catch {
    throw new AppError('client not found', 404);
  }
};
