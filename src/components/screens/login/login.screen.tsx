import { GetLottie } from "components/basic/lottie";
import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import React from "react";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";
import { LoginButtons } from "./loginButtons";
import { useAppNavigation } from "hooks/common.hooks";
import { useFonts, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { Image, View } from "react-native";
export const Login = () => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });
  const { navigate } = useAppNavigation();
  const continueLogin = () => {
    navigate("LoginChoose");
  };

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

      <LoginButtons continueLogin={continueLogin} />

      <Image
        source={require("assets/images/start.png")}
        style={{ marginTop: 120 }}
      />
    </ScreenView>
  );
};
