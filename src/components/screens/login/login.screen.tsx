import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import React from "react";
import { GS } from "utils/globalStyles";
import { LoginButtons } from "./loginButtons";
import { useFonts, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { Image } from "react-native";
import { useAppIsDarkMode } from "state/appState";
export const Login = () => {
  const isDark = useAppIsDarkMode();
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });

  return (
    <ScreenView
      style={[GS.center, GS.paddingHorizontal32, { display: "flex" }]}
    >
      <AppText
        style={[
          GS.bold,
          GS.text24,
          GS.marginTop32,
          { textAlign: "right", fontFamily: "Rubik_500Medium" },
        ]}
      >
        הזן את הטלפון לטובת אימות
      </AppText>

      <LoginButtons />

      <Image
        source={require("assets/images/start.png")}
        style={{ marginTop: 120 }}
      />
    </ScreenView>
  );
};
