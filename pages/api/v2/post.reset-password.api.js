const RESET_PASSWORD_URL = `https://${process.env.ENVIRONMENT}-auth-api.zoficash.com/api/v1/user-reset-account-password/`;
export default async function resetPasswordApi(req, res) {
  if (req.method !== "POST")
    return res.json({ status: 400, errors: `${req.method} not allowed.` });
  try {
    fetch(RESET_PASSWORD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
      }),
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ status: 400, errors: error });
  }
}
