import { Response, Request } from 'express';
import { response } from '../../helper/response.helper';
import { UserModel } from './authModel';
import { validationResult } from 'express-validator';

export const createUser = (req: Request, res: Response) => {
  const user = req.body as UserModel;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const msg = errors.mapped();
    response.fail(res, msg, 404);
  }
  response.success(res, user, 201);
};

export const loginUser = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const msg = errors.mapped();
    response.fail(res, msg, 404);
  }
  response.success(res, 'login user', 201);
};

export const renewUser = (req: Request, res: Response) => {
  response.success(res, 'renew user', 200);
};
