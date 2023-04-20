export default async function verifyToken(verificationCode) {
  const apiUrl = process.env.VERIFY_ACCOUNT_GET;
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
