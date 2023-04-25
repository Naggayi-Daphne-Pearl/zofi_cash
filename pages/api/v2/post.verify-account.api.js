const VERIFY_ACCOUNT_URL =
  "https://staging-auth-api.zoficash.com/api/v1/send-otp-to-account";
export default async function otpVerficationApi(email, phone_number) {
  const apiUrl = VERIFY_ACCOUNT_URL;
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phone_number }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
