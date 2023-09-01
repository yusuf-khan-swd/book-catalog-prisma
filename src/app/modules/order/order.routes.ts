import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middleware/auth';
import { OrderController } from './order.controller';

const router = express.Router();

router.post(
  '/create-order',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.createOrder
);

router.get(
  '/',
  auth(ENUM_USER_ROLE.CUSTOMER),
  OrderController.getAllOrdersForCustomer
);

router.get('/', auth(ENUM_USER_ROLE.ADMIN), OrderController.getAllOrders);

router.get('/:id', OrderController.getSingleOrder);

export const OrderRoutes = router;
