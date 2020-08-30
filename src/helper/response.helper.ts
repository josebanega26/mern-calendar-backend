import { Response } from 'express';

const success = (res: Response, message: any = '', status: number = 200) => {
  res.status(status).json({
    error: false,
    status,
    message,
  });
};

const fail = (res: Response, message: any = 'Internal Server Error', status: number = 500) => {
  res.status(status).json({
    error: true,
    status,
    message,
  });
};

export const response = { success, fail };
