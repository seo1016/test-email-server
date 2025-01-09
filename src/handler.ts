import { sendEmail } from './sendEmail';

export const handler = async () => {
  await sendEmail();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Email sent successfully!' }),
  };
};
