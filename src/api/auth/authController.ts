import { Response, Request } from 'express';
import { response } from '../../helper/response.helper';
import { UserModel } from './authModel';

export const createUser = (req: Request, res: Response) => {
  const user = req.body as UserModel;

  response.success(res, user, 201);
};

export const loginUser = (req: Request, res: Response) => {
  response.success(res, 'login user', 201);
};

export const renewUser = (req: Request, res: Response) => {
  response.success(res, 'renew user', 200);
};
