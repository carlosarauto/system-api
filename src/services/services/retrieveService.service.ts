import { AppError } from '../../errors';
import prisma from '../../prisma';

export const retrieveServiceService = async (id: string) => {
  const service = await prisma.service.findUnique({
    where: { id },
  });

  if (!service) {
    throw new AppError('service not found', 404);
  }

  return service;
};
