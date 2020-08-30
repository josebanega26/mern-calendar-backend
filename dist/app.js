"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const auth_1 = __importDefault(require("./api/auth/auth"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
app.use(body_parser_1.default());
app.use(express_1.default.static('public'));
app.use('/api/auth', auth_1.default);
app.listen({ port: config_1.PORT }, () => {
    console.log("server it's work", config_1.PORT);
});
