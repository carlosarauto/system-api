import prisma from '../../prisma';
import { hashSync } from 'bcryptjs';
import { AppError } from '../../errors';
import { UserReturnSchema } from '../../schemas';
import { IUserRequest } from '../../interfaces';

export const createUserService = async ({
  name,
  login,
  password,
}: IUserRequest) => {
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
