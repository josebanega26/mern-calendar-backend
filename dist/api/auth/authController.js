"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewUser = exports.loginUser = exports.createUser = void 0;
const response_helper_1 = require("../../helper/response.helper");
exports.createUser = (req, res) => {
    const user = req.body;
    response_helper_1.response.success(res, user, 201);
};
exports.loginUser = (req, res) => {
    response_helper_1.response.success(res, 'login user', 201);
};
exports.renewUser = (req, res) => {
    response_helper_1.response.success(res, 'renew user', 200);
};
