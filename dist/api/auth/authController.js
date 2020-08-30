"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewUser = exports.loginUser = exports.createUser = void 0;
const response_helper_1 = require("../../helper/response.helper");
const express_validator_1 = require("express-validator");
exports.createUser = (req, res) => {
    const user = req.body;
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        const msg = errors.mapped();
        response_helper_1.response.fail(res, msg, 404);
    }
    response_helper_1.response.success(res, user, 201);
};
exports.loginUser = (req, res) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        const msg = errors.mapped();
        response_helper_1.response.fail(res, msg, 404);
    }
    response_helper_1.response.success(res, 'login user', 201);
};
exports.renewUser = (req, res) => {
    response_helper_1.response.success(res, 'renew user', 200);
};
