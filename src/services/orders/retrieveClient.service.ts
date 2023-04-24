import { AppError } from '../../errors';
import prisma from '../../prisma';
import { ClientReturnSchema } from '../../schemas';

export const retrieveClientService = async (id: string) => {
  const client = await prisma.client.findUnique({
    where: { id },
  });

  if (!client) {
    throw new AppError('client not found', 404);
  }

  return ClientReturnSchema.parse(client);
};
