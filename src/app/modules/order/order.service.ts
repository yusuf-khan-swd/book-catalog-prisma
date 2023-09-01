import { Order } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createOrder = async (data: any): Promise<Order> => {
  return await prisma.order.create({ data });
};

const getAllOrders = async (): Promise<Order[]> => {
  return await prisma.order.findMany();
};

const getAllOrdersForCustomer = async (userId: string): Promise<Order[]> => {
  return await prisma.order.findMany({
    where: {
      userId,
    },
  });
};

const getSingleOrder = async (
  id: string,
  user: any
): Promise<Order | null | undefined> => {
  if (user.role === 'admin') {
    return await prisma.order.findUnique({
      where: { id },
    });
  }

  if (user.role === 'customer') {
    return await prisma.order.findUnique({
      where: { userId: user.userId, id },
    });
  }
};
export const OrderService = {
  createOrder,
  getAllOrders,
  getAllOrdersForCustomer,
  getSingleOrder,
};