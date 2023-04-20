export async function verifyEmailOrPhoneApi(activeTab, values) {
  const apiUrlPhone = process.env.VERIFY_PHONE_URL;
  const apiUrlEmail = process.env.VERIFY_EMAIL_URL;
  if (activeTab === "phone") {
    apiUrlPhone;
  } else {
    apiUrlEmail;
  }
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    const error = new Error(`Failed to send verification ${activeTab}.`);
    error.response = response;
    throw error;
  }
}
