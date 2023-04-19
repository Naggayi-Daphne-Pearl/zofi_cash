// // This module contains functions for interacting with the user API

// // Example endpoint URLs
// const USER_DETAILS_URL = "/api/user-details";
// const UPDATE_USER_DETAILS_URL = "/api/update-user-details";
// const DEACTIVATE_USER_URL = "https://staging-auth-api.zoficash.com/api/v1/deactivate-account/:account_id";

// // Function to retrieve the details of the currently logged-in user
// export const getUserDetailsApi = async () => {
//   const response = await fetch(USER_DETAILS_URL, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//     },
//   });

//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }

//   const data = await response.json();
//   return data.userDetails;
// };

// // Function to update the details of the currently logged-in user
// export const updateUserDetailsApi = async (newUserDetails) => {
//   const response = await fetch(UPDATE_USER_DETAILS_URL, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//     },
//     body: JSON.stringify(newUserDetails),
//   });

//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }
// };

// // Function to deactivate the currently logged-in user's account
// export const deactivateUserApi = async () => {
//   const response = await fetch(DEACTIVATE_USER_URL, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
//     },
//   });

//   if (!response.ok) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }
// };
