import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {AppTransparentModal} from 'components/modals/appModal';
import { HomeScreen } from "components/screens/home/home.screen";
import { Login } from "components/screens/login/login.screen";
import { LoginChoose } from "components/screens/loginChoose/loginChoose.screen";
import { Signup } from "components/screens/Signup/Signup.screen";
import { SettingsScreen } from "components/screens/settings/settings.screen";
import {
  useAppIsDarkMode,
  useAppShowSplashScreen,
  useAppThemeColors,
} from "state/appState";
import { useUserIsLoggedIn } from "state/userState";
// import {useAppAuth} from 'hooks/useAppAuth.hook';
import { MitnadvimScreen } from "components/screens/mitnadvim/mitnadvim.screen";
import { SplashScreen } from "components/screens/splash/splash.screen";
import { AppTransparentModal } from "modals/appModal";
import React from "react";
import { StatusBar } from "react-native";
import { SCREENS } from "utils/enums";




const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const appColors = useAppThemeColors();
  const showSplash = useAppShowSplashScreen();
  const isLoggedIn = useUserIsLoggedIn();
  const isDarkMode = useAppIsDarkMode();

  // useAppAuth();

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer
      theme={
        isDarkMode
          ? DarkTheme
          : {
              ...DefaultTheme,
              colors: {
                ...DefaultTheme.colors,
                background: appColors.PrimaryBG,
              },
            }
      }
    >
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name={SCREENS.Home} component={HomeScreen} />
            <Stack.Screen
              name={SCREENS.Mitnadvim}
              component={MitnadvimScreen}
            />
            <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name={SCREENS.Login} component={Login} />
            <Stack.Screen name={SCREENS.LoginChoose} component={LoginChoose} />
            <Stack.Screen name={SCREENS.Signup} component={Signup} />
          </Stack.Group>
        )}
        <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
          <Stack.Screen
            name={"AppTransparentModal"}
            component={AppTransparentModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
