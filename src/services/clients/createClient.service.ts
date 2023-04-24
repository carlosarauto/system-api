import prisma from '../../prisma';
import { Prisma } from '@prisma/client';
import { ClientReturnSchema } from '../../schemas';

export const createClientService = async ({
  name,
  phone,
}: Prisma.ClientCreateInput) => {
  const client = await prisma.client.create({
    data: {
      name,
      phone,
    },
  });

  return ClientReturnSchema.parse(client);
};
