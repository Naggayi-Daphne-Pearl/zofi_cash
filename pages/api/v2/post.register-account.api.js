export async function registerUser(newUserData) {
  const apiUrl = process.env.REGISTER_URL;
  const response = await fetch(apiUrl, {
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
