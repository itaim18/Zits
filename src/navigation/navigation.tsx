import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Donate } from "components/screens/home/donate.screen";
import { Profile } from "components/screens/home/Profile.screen";
import { StartScreen } from "components/screens/home/start.screen";
import { Community } from "components/screens/home/community.screen";
import { Image } from "react-native";
import { useAppShowSplashScreen, useAppThemeColors } from "state/appState";
import { useUserIsLoggedIn } from "state/userState";
import { SplashScreen } from "components/screens/splash/splash.screen";
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
import { Messages2, HeartSearch, User, Card } from "iconsax-react-native";
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
              <Stack.Screen name={SCREENS.Finish} component={FinishScreen} />
              <Stack.Screen name={SCREENS.Record} component={RecordScreen} />
            </Stack.Group>
          </Stack.Navigator>
        ) : (
          <Tab.Navigator initialRouteName={SCREENS.Logs}>
            <Tab.Group>
              <Tab.Screen
                name={SCREENS.Donate}
                component={Donate}
                options={{
                  tabBarIcon: ({ color }) => <Card color={color} />,
                  tabBarActiveTintColor: "#E27667",
                  tabBarInactiveTintColor: "black",
                }}
              />
              <Tab.Screen
                name={SCREENS.Logs}
                component={LogsScreen}
                options={{
                  tabBarIcon: ({ color }) => <HeartSearch color={color} />,
                  tabBarActiveTintColor: "#E27667",
                  tabBarInactiveTintColor: "black",
                }}
              />
              <Tab.Screen
                name={SCREENS.Community}
                component={Community}
                options={{
                  tabBarIcon: ({ color }) => <Messages2 color={color} />,
                  tabBarActiveTintColor: "#E27667",
                  tabBarInactiveTintColor: "black",
                }}
              />
              <Tab.Screen
                name={SCREENS.Profile}
                component={Profile}
                options={{
                  tabBarIcon: ({ color }) => <User color={color} />,
                  tabBarActiveTintColor: "#E27667",
                  tabBarInactiveTintColor: "black",
                }}
              />
            </Tab.Group>
          </Tab.Navigator>
        )
      ) : (
        <LoginStack />
      )}
    </NavigationContainer>
  );
};
