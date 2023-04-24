import { AppError } from '../../errors';
import prisma from '../../prisma';
import { ClientReturnSchema } from '../../schemas';
import { IClientUpdateRequest } from '../../interfaces';

export const updateClientService = async (
  id: string,
  { name, phone }: IClientUpdateRequest,
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
