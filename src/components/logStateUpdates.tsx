import { useEffect } from "react";
import { useAppIsDarkMode, useAppThemeName } from "state/appState";
import { useUserIsLoggedIn, useUserType } from "state/userState";

import { useAppToken } from "state/appState";
export const LogStateUpdates = () => {
  const isDarkMode = useAppIsDarkMode();
  const themeName = useAppThemeName();
  const userType = useUserType();
  const isUserLoggedIn = useUserIsLoggedIn();
  const token = useAppToken();

  useEffect(() => {
    console.log("Recoil AppState (isDarkMode):", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    console.log("Recoil AppState (themeName):", themeName);
  }, [themeName]);

  useEffect(() => {
    console.log("Recoil AppState (isUserLoggedIn):", isUserLoggedIn);
  }, [isUserLoggedIn]);
  useEffect(() => {
    console.log("Recoil AppState (userType):", userType);
  }, [userType]);
  useEffect(() => {
    console.log("Recoil AppState (token):", token);
  }, [token]);
  return null;
};
