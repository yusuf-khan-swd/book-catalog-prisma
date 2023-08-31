import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createUser = async (data: User): Promise<User> => {
  return await prisma.user.create({
    data,
  });
};

export const UserService = { createUser };
