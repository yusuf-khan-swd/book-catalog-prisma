import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';
import { ILoginUserResponse, IUserLogin } from './user.interface';

const createUser = async (data: User): Promise<User> => {
  return await prisma.user.create({
    data,
  });
};

const loginUser = async (data: IUserLogin): Promise<ILoginUserResponse> => {
  const isUserExist = await prisma.user.findFirst({
    where: {
      email: data?.email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const isPasswordMatch = isUserExist.password === data.password;

  if (isUserExist.password && !isPasswordMatch) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  const { id: userId, role } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAllUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

const getSingleUser = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const updateUser = async (
  id: string,
  data: Partial<User>
): Promise<User | null> => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

const deleteUser = async (id: string): Promise<User | null> => {
  return await prisma.user.delete({ where: { id } });
};

const userProfile = async (id: string): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  userProfile,
  loginUser,
};
