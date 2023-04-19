export default async function forgotPasswordApi(req, res) {
  const apiUrl = process.env.RESET_PASSWORD_URL;
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
