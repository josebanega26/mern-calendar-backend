"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.success = void 0;
exports.success = (res, message = '', status = 200) => {
    res.status(status).json({
        error: false,
        status,
        message,
    });
};
exports.error = (res, message = 'Internal Server Error', status = 500) => {
    res.status(status).json({
        error: true,
        status,
        message,
    });
};
