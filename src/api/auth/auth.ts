import { Router } from 'express';
import { createUser, loginUser, renewUser } from './authController';
import { check } from 'express-validator';
import { validateFields } from '../../middlewares/validate-fields';

const authRouter = Router();

// Create new User
authRouter.route('/new').post(
  [
    check('user', 'the user is empty').notEmpty(),
    check('email', 'email required').isEmail().notEmpty(),
    check('password', 'password must contain between 4 and 12 characters').isLength({
      min: 4,
      max: 12,
    }),
    validateFields,
  ],
  createUser
);
// Login user
authRouter.route('/').post(
  [
    check('email', 'email required').isEmail().notEmpty(),
    check('password', 'password must contain between 4 and 12 characters').isLength({
      min: 4,
      max: 12,
    }),
    validateFields,
  ],
  loginUser
);

authRouter.route('/renew').get(renewUser);

export default authRouter;
