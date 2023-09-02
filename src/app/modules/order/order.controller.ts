import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const userId = req.user?.userId;
  data.userId = userId;
  const result = await OrderService.createOrder(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getAllOrdersForAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrdersForAdmin();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get all categories successfully',
    data: result,
  });
});

const getAllOrdersForCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.user?.userId;
    const result = await OrderService.getAllOrdersForCustomer(userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all categories successfully',
      data: result,
    });
  }
);

const getSingleOrder = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = req.user;

  const result = await OrderService.getSingleOrder(id, user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single category successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getAllOrdersForAdmin,
  getAllOrdersForCustomer,
  getSingleOrder,
};
