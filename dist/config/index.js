"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
const dotenv_1 = require("dotenv");
dotenv_1.config();
exports.PORT = process.env.PORT;
