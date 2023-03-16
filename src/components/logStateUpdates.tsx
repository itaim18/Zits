import {useEffect} from 'react';
import {useAppIsDarkMode, useAppThemeName} from 'state/appState';
import {useUserIsLoggedIn, useUserType} from 'state/userState';

export const LogStateUpdates = () => {
  const isDarkMode = useAppIsDarkMode();
  const themeName = useAppThemeName();
const userType = useUserType();
  const isUserLoggedIn = useUserIsLoggedIn();

  useEffect(() => {
    console.log('Recoil AppState (isDarkMode):', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    console.log('Recoil AppState (themeName):', themeName);
  }, [themeName]);

  useEffect(() => {
    console.log('Recoil AppState (isUserLoggedIn):', isUserLoggedIn);
  }, [isUserLoggedIn]);
  useEffect(() => {
    console.log('Recoil AppState (isUserLoggedIn):', userType);
  }, [userType]);
  return null;
};
