// Set up Security Answer
export async function securityAnswerApi() {
  const apiUrl = process.env.SET_SECURITY_ANSWER_URL;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ security_answer, security_question }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage || "Failed to set security answer");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
