import React from "react";
import { LoginCard } from "components/basic/loginCard";
export const Signin = () => {
  const handleLogin = () => {
    console.log("signed in");
  };
  return <LoginCard handleSubmitForm={handleLogin} />;
};
