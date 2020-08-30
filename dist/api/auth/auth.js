"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("./authController");
const authRouter = express_1.Router();
// Auth router
authRouter.route('/').post(authController_1.loginUser);
authRouter.route('/new').post(authController_1.createUser);
authRouter.route('/renew').get(authController_1.renewUser);
exports.default = authRouter;
