"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const client_ses_1 = require("@aws-sdk/client-ses");

const ses = new client_ses_1.SES({ region: 'ap-northeast-2' });

const sendEmail = async () => {
    const params = {
        Destination: {
            ToAddresses: ['seoseunghun3@dgsw.hs.kr'],  // 받는 사람 이메일
        },
        Message: {
            Body: {
                Text: { Data: '테스트' },  // 이메일 본문
            },
            Subject: { Data: 'hi' },  // 이메일 제목
        },
        Source: 'seoseunghun3@gmail.com',  // SES에서 검증된 발신자 이메일
    };

    try {
        const result = await ses.sendEmail(params);
        console.log('Email sent:', result);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

exports.sendEmail = sendEmail;
