import prisma from '../../prisma';

export const listServiceService = async () => {
  const services = await prisma.service.findMany();

  return services;
};
