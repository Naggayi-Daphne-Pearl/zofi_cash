export default async function loginUser(req, res) {
  const apiUrl = process.env.LOGIN_URL;
  if (req.method !== "POST")
    return res.json({ status: 400, errors: `${req.method} not allowed.` });
  try {
    fetch(`https://${process.env.ENVIRONMENT}-auth-api.zoficash.com/api/v1/account-login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, phone_number }),
    });
  } catch (error) {
    console.log("error", error);
    return res.json({ status: 400, errors: error });
  }
}

// TEAM 

// FRONTEND - KEYS - AWS, FIREBASE, STRIPE, PAYSTACK, PAYPAL, PAYS
// BACKEND - KEYS - AWS, FIREBASE, STRIPE, PAYSTACK, PAYPAL, PAYS
// MANAGERS

