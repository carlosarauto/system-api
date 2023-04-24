import prisma from '../../prisma';
import { ClientReturnSchema } from '../../schemas';
import { IClientRequest } from '../../interfaces';

export const createClientService = async ({ name, phone }: IClientRequest) => {
  const client = await prisma.client.create({
    data: {
      name,
      phone,
    },
  });

  return ClientReturnSchema.parse(client);
};
