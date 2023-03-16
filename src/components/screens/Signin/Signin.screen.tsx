import React from "react";
import { LoginCard } from "components/basic/loginCard";
import { useSetUserIsLoggedIn } from "state/userState";
export const Signin = () => {
  const setUserIsLoggedIn = useSetUserIsLoggedIn();
  const handleLogin = () => {
    setUserIsLoggedIn(true);
  };
  return <LoginCard handleSubmitForm={handleLogin} />;
};
