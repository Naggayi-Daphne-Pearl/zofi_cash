const REGISTER_URL =
  "https://staging-auth-api.zoficash.com/api/v1/account-registration";
export async function registerUser(newUserData) {
  const response = await fetch(REGISTER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUserData),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Registration failed");
  }

  const data = await response.json();
  return data;
}
