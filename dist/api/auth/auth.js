"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("./authController");
const express_validator_1 = require("express-validator");
const authRouter = express_1.Router();
// Create new User
authRouter.route('/new').post([
    express_validator_1.check('user', 'the user is empty').notEmpty(),
    express_validator_1.check('email', 'email required').isEmail().notEmpty(),
    express_validator_1.check('password', 'password must contain between 4 and 12 characters').isLength({
        min: 4,
        max: 12,
    }),
], authController_1.createUser);
// Login user
authRouter.route('/').post(express_validator_1.check('email', 'email required').isEmail().notEmpty(), express_validator_1.check('password', 'password must contain between 4 and 12 characters').isLength({
    min: 4,
    max: 12,
}), authController_1.loginUser);
authRouter.route('/renew').get(authController_1.renewUser);
exports.default = authRouter;
