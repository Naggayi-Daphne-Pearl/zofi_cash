export default async function resetPasswordApi(req, res) {
  const apiUrl = process.env.RESET_PASSWORD_URL;
  if (req.method !== "POST")
    return res.json({ status: 400, errors: `${req.method} not allowed.` });
  try {
    fetch(apiUrl, {
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
