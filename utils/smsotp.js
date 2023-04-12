import twilio from 'twilio';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export async function sendOtp(phoneNumber) {
  const otp = Math.floor(100000 + Math.random() * 900000).toString().substring(0, 6);

  try {
    await client.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });

    return otp;
  } catch (error) {
    console.error(error);
  }
}
