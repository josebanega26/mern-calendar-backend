import { Router, NextFunction } from 'express';
import { success } from '../../helper/response.helper';
const authRouter = Router();
// Auth router
authRouter.route('/').get((req, res) => {
  success(res, 'text file', 200);
});

export default authRouter;
