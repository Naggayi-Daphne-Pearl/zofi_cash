// accounts can be deactivated but not deleted.

import { useState } from "react";

const UserProfilePage = () => {
  const [accountActive, setAccountActive] = useState(true);

  const handleDeactivation = async (e) => {
    e.preventDefault();
    // Call an API to deactivate the user's account
    const response = await fetch("/api/deactivate-account", {
      method: "POST",
      body: JSON.stringify({
        /* Deactivation data */
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setAccountActive(false);
    } else {
      // Handle deactivation error
      console.error("account failed to be activated");
    }
  };

  return (
    <>
      <p>Account status: {accountActive ? "Active" : "Inactive"}</p>
      <button onClick={handleDeactivation}>Deactivate account</button>
    </>
  );
};
