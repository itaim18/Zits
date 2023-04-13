import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREENS } from "utils/enums";
import { Login } from "components/screens/login/login.screen";
import { LoginChoose } from "components/screens/loginChoose/loginChoose.screen";
import { Signup } from "components/screens/Signup/Signup.screen";
import { Signin } from "components/screens/Signin/Signin.screen";
const LoginStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREENS.Login} component={Login} />
        <Stack.Screen name={SCREENS.LoginChoose} component={LoginChoose} />
        <Stack.Screen name={SCREENS.Signup} component={Signup} />
        <Stack.Screen name={SCREENS.Signin} component={Signin} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default LoginStack;
