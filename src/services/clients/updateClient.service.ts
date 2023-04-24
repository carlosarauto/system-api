import { AppError } from '../../errors';
import prisma from '../../prisma';
import { Prisma } from '@prisma/client';
import { ClientReturnSchema } from '../../schemas';

export const updateClientService = async (
  id: string,
  { name, phone }: Prisma.ClientUpdateInput,
) => {
  try {
    const client = await prisma.client.update({
      where: { id },
      data: {
        name,
        phone,
      },
    });

    return ClientReturnSchema.parse(client);
  } catch {
    throw new AppError('client not found', 404);
  }
};
