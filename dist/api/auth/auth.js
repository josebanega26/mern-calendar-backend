"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const response_helper_1 = require("../../helper/response.helper");
const authRouter = express_1.Router();
// Auth router
authRouter.route('/').get((req, res) => {
    response_helper_1.success(res, 'text file', 200);
});
exports.default = authRouter;
