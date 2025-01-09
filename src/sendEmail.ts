import { SES } from '@aws-sdk/client-ses';

const ses = new SES({ region: 'ap-northeast-2' }); // AWS 리전을 설정합니다.

export const sendEmail = async () => {
  const params = {
    Destination: {
      ToAddresses: ['seoseunghun3@dgsw.hs.kr'], // 받는 사람 이메일
    },
    Message: {
      Body: {
        Text: { Data: '테스트' }, // 이메일 본문 내용
      },
      Subject: { Data: 'hi' }, // 이메일 제목
    },
    Source: 'seoseunghun3@gmail.com', // SES에서 검증된 발신자 이메일
  };

  try {
    const result = await ses.sendEmail(params);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
