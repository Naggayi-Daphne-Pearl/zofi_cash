// Putting the user account on the waitlist after registration:
import React from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../contexts/v1/AuthContext";

const WaitingPage = () => {
  const { user } = useUserContext();
  const router = useRouter();

  if (!user || !user.isOnWaitlist) {
    // redirect to home page if user is not on waitlist
    router.push("/");
  }
  return (
    <div>
      <h1>Your account is on the waitlist.</h1>
      <p>We'll notify you when your account has been approved.</p>
    </div>
  );
};

export default WaitingPage;
