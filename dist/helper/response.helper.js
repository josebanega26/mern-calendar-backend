"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
const success = (res, message = '', status = 200) => {
    res.status(status).json({
        error: false,
        status,
        message,
    });
};
const fail = (res, message = 'Internal Server Error', status = 500) => {
    res.status(status).json({
        error: true,
        status,
        message,
    });
};
exports.response = { success, fail };
