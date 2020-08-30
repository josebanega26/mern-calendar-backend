import { NextFunction, Response, Request } from 'express';
import { validationResult } from 'express-validator';
import { response } from '../helper/response.helper';

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const msg = errors.mapped();
    response.fail(res, msg, 404);
  }

  next();
};
