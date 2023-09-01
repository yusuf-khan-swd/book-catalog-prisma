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

const getSingleOrder = async (id: string): Promise<Order | null> => {
  return await prisma.order.findUnique({
    where: { id },
  });
};
export const OrderService = {
  createOrder,
  getAllOrders,
  getAllOrdersForCustomer,
  getSingleOrder,
};
