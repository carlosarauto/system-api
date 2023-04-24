import { hashSync } from 'bcryptjs';
import { AppError } from '../../errors';
import prisma from '../../prisma';
import { UserReturnSchema } from '../../schemas';
import { IUserUpdateRequest } from '../../interfaces/users.interfaces';

export const updateUserService = async (
  id: string,
  { name, login, password }: IUserUpdateRequest,
) => {
  if (password) {
    password = hashSync(password, 10);
  }

  if (login) {
    const user = await prisma.user.findUnique({ where: { login } });
    if (user) {
      throw new AppError(`${login} already exists`, 409);
    }
  }

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        login,
        password,
      },
    });

    return UserReturnSchema.parse(user);
  } catch {
    throw new AppError('user not found', 404);
  }
};
