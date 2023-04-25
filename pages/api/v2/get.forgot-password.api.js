const FORGOT_PASSWORD_URL =
  "https://staging-auth-api.zoficash.com/api/v1/reset-account-password/:reset_password_id";

export default async function forgotPasswordApi(req, res) {
  const apiUrl = FORGOT_PASSWORD_URL;
  if (req.method !== "GET")
    return res.json({ status: 400, errors: `${req.method} not allowed.` });
  try {
    fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        security_question,
        security_answer,
        newPassword,
      }),
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ status: 400, errors: error });
  }
}
