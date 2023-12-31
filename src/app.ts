import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import routes from './app/routes';

import cookieParser from 'cookie-parser';
import auth from './app/middleware/auth';
import { UserController } from './app/modules/user/user.controller';
import { ENUM_USER_ROLE } from './enums/user';

const app: Application = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);
app.post('/api/v1/auth/signup', UserController.createUser);
app.post('/api/v1/auth/signin', UserController.loginUser);
app.get(
  '/api/v1/profile',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  UserController.userProfile
);

app.get('/', (req, res) => {
  res.send({ success: true, message: 'Api working' });
});

//global error handler
app.use(globalErrorHandler);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
