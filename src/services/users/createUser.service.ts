import prisma from '../../prisma';
import { hashSync } from 'bcryptjs';
import { AppError } from '../../errors';
import { Prisma } from '@prisma/client';
import { UserReturnSchema } from '../../schemas';

export const createUserService = async ({
  name,
  login,
  password,
}: Prisma.UserCreateInput) => {
  let user = await prisma.user.findUnique({
    where: { login },
  });

  if (user) {
    throw new AppError('user already exists', 409);
  }
  password = hashSync(password, 10);

  user = await prisma.user.create({
    data: {
      name,
      login,
      password,
    },
  });

  return UserReturnSchema.parse(user);
};
