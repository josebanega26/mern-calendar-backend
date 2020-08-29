import { Response } from 'express';

export const success = (res: Response, message: string = '', status: number = 200) => {
  res.status(status).json({
    error: false,
    status,
    message,
  });
};

export const error = (
  res: Response,
  message: string = 'Internal Server Error',
  status: number = 500
) => {
  res.status(status).json({
    error: true,
    status,
    message,
  });
};
