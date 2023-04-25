const LOGOUT_ACCOUNT = "https://staging-auth-api.zoficash.com/api/v1/logout";
export default async function logoutUser(req, res) {
  const apiUrl = LOGOUT_ACCOUNT;
  if (req.method !== "DELETE")
    return res.json({ status: 400, errors: `${req.method} not allowed.` });
  try {
    fetch(apiUrl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, phone_number }),
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ status: 400, errors: error });
  }
}
