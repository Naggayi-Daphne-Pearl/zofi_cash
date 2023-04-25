// Set up Security Answer
const SET_SECURITY_ANSWER_URL = `https://${process.env.ENVIRONMENT}-auth-api.zoficash.com/api/v1/setup-security-question/:security_question_setup_id`;
export async function securityAnswerApi() {
  const response = await fetch(SET_SECURITY_ANSWER_URL, {
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
