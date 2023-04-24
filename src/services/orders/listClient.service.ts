import prisma from '../../prisma';
import { ClientArraySchema } from '../../schemas';

export const listClientService = async () => {
  const clients = await prisma.client.findMany();

  return ClientArraySchema.parse(clients);
};
