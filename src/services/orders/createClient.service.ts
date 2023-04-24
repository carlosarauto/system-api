import prisma from '../../prisma';
import { Prisma } from '@prisma/client';
import { ClientReturnSchema } from '../../schemas';

export const createClientService = async ({
  name,
  phone,
}: i) => {
  const order = await prisma.order.create({
    data: {
      name,
      phone,
    },
  });

  return order;
};
