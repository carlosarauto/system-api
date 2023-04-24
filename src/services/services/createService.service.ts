import prisma from '../../prisma';
import { AppError } from '../../errors';
import { IServiceRequest } from '../../interfaces';

export const createServiceService = async ({
  name,
  price,
}: IServiceRequest) => {
  let service = await prisma.service.findFirst({
    where: { name: { equals: name, mode: 'insensitive' } },
  });

  if (service) {
    throw new AppError('service already exists', 409);
  }

  service = await prisma.service.create({
    data: {
      name,
      price,
    },
  });

  return service;
};
