"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFields = void 0;
const express_validator_1 = require("express-validator");
const response_helper_1 = require("../helper/response.helper");
exports.validateFields = (req, res, next) => {
    const errors = express_validator_1.validationResult(req);
    if (!errors.isEmpty()) {
        const msg = errors.mapped();
        response_helper_1.response.fail(res, msg, 404);
    }
    next();
};
