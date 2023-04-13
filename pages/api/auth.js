// This module contains functions for interacting with the authentication API

// Example endpoint URLs
const LOGIN_URL = "https://staging-auth-api.zoficash.com/api/v1/account-login";
const REGISTER_URL =
  "https://staging-auth-api.zoficash.com/api/v1//account-registration";
const VERIFY_EMAIL_URL = "/api/verify-email";
const VERIFY_PHONE_URL =
  "https://staging-auth-api.zoficash.com/api/v1/send-sms";
const RESET_PASSWORD_URL =
  "https://staging-auth-api.zoficash.com/api/v1/user-reset-account-password/";

// Function to log in the user
export const loginApi = async (email, password) => {
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};

// Function to register a new user
export const registerApi = async (newUserData) => {
  const response = await fetch(REGISTER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  const data = await response.json();
  return data;
};

// Function to verify a user's email address
export const verifyEmailApi = async (verificationToken) => {
  const response = await fetch(VERIFY_EMAIL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ verificationToken }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

// Function to verify a user's phone number
export const verifyPhoneApi = async (verificationCode) => {
  const response = await fetch(VERIFY_PHONE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({ verificationCode }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};

// Function to reset a user's password
export const resetPasswordApi = async (
  email,
  securityQuestion,
  securityAnswer,
  newPassword
) => {
  const response = await fetch(RESET_PASSWORD_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      securityQuestion,
      securityAnswer,
      newPassword,
    }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
};
