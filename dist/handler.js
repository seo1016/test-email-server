"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendEmail_1 = require("./sendEmail");

const handler = async () => {
    await (0, sendEmail_1.sendEmail)();
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
};
exports.handler = handler;
