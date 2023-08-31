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

const getSingleUser = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const UserService = { createUser, getAllUsers, getSingleUser };
