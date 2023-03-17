import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import {AppTransparentModal} from 'components/modals/appModal';
import { Donate } from "components/screens/home/donate.screen";
import { Profile } from "components/screens/home/Profile.screen";
import { StartScreen } from "components/screens/home/start.screen";
import { SettingsScreen } from "components/screens/settings/settings.screen";
import { Community } from "components/screens/home/community.screen";
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
import { useUserType } from "state/userState";
import React from "react";
import { StatusBar } from "react-native";
import { SCREENS } from "utils/enums";
import LoginStack from "./loginStack.Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HelpScreen } from "components/screens/home/help.screen";
import { RecordScreen } from "components/screens/home/record.screen";
import { LogsScreen } from "components/screens/home/logs.screen";
import { FinishScreen } from "components/screens/home/finish.screen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const userType = useUserType();
  const appColors = useAppThemeColors();
  const showSplash = useAppShowSplashScreen();
  const isLoggedIn = useUserIsLoggedIn();

  // useAppAuth();

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: appColors.PrimaryBG,
        },
      }}
    >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />

      {isLoggedIn ? (
        userType === "survivor" ? (
          <Stack.Navigator>
            <Stack.Group>
              <Stack.Screen name={SCREENS.Start} component={StartScreen} />
              <Stack.Screen name={SCREENS.Help} component={HelpScreen} />
              {/* <Stack.Screen name={SCREENS.Settings} component={SettingsScreen} /> */}
              <Stack.Screen name={SCREENS.Finish} component={FinishScreen} />
              <Stack.Screen name={SCREENS.Record} component={RecordScreen} />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          <Tab.Navigator>
            <Tab.Group>
              <Tab.Screen name={SCREENS.Logs} component={LogsScreen} />
              <Tab.Screen name={SCREENS.Community} component={Community} />
              <Tab.Screen name={SCREENS.Profile} component={Profile} />
              <Tab.Screen name={SCREENS.Donate} component={Donate} />
            </Tab.Group>
          </Tab.Navigator>
        )
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};
