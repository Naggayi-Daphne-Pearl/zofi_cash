const VERIFY_ACCOUNT_GET =
  "https://staging-auth-api.zoficash.com/api/v1/verify-account";

export default async function verifyToken(verificationCode) {
  const apiUrl = VERIFY_ACCOUNT_GET;
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ verificationCode }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
