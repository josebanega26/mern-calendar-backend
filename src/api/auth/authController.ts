import { Response, Request } from 'express';
import { success } from '../../helper/response.helper';
import { UserModel } from './authModel';

export const createUser = (req: Request, res: Response) => {
  const user = req.body as UserModel;
  console.log('user', user);
  success(res, 'create user', 200);
};

export const loginUser = (req: Request, res: Response) => {
  success(res, 'login user', 200);
};

export const renewUser = (req: Request, res: Response) => {
  success(res, 'renew user', 200);
};
