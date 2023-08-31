import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createUser = async (data: User): Promise<User> => {
  return await prisma.user.create({
    data,
  });
};

const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

export const UserService = { createUser, getAllUsers };
