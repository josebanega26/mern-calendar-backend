import { Router } from 'express';
import { createUser, loginUser, renewUser } from './authController';

const authRouter = Router();
// Auth router
authRouter.route('/').post(loginUser);
authRouter.route('/new').post(createUser);
authRouter.route('/renew').get(renewUser);

export default authRouter;
