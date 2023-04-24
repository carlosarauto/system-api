import { AppError } from '../../errors';
import prisma from '../../prisma';
import { IServiceUpdateRequest } from '../../interfaces/services.interfaces';

export const updateServiceService = async (
  id: string,
  { name, price }: IServiceUpdateRequest,
) => {
  try {
    const service = await prisma.service.update({
      where: { id },
      data: {
        name,
        price,
      },
    });

    return service;
  } catch {
    throw new AppError('service not found', 404);
  }
};
