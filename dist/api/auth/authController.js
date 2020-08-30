"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewUser = exports.loginUser = exports.createUser = void 0;
const response_helper_1 = require("../../helper/response.helper");
exports.createUser = (req, res) => {
    const user = req.body;
    console.log('user', user);
    response_helper_1.success(res, 'create user', 200);
};
exports.loginUser = (req, res) => {
    response_helper_1.success(res, 'login user', 200);
};
exports.renewUser = (req, res) => {
    response_helper_1.success(res, 'renew user', 200);
};
