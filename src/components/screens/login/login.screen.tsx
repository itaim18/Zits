import { GetLottie } from "components/basic/lottie";
import { AppText, AppTextHeader } from "components/basic/texts";
import { AppButton } from "components/basic/buttons";
import { ScreenView } from "components/basic/views";
import React from "react";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";
import { Strings } from "utils/strings";
import { LoginButtons } from "./loginButtons";
import { useAppNavigation } from "hooks/common.hooks";
export const Login = () => {
  const { navigate } = useAppNavigation();
  const continueLogin = () => {
    navigate("LoginChoose");
  };
  const toSignin = () => {
    navigate("Signin");
  };
  return (
    <ScreenView style={[GS.alignCenter, GS.center, GS.paddingHorizontal32]}>
      <AppText style={[GS.bold, GS.text32, GS.marginTop32]}>
        {Strings.screens.login.letsGetYouIn}
      </AppText>
      <AppTextHeader>Sign Up</AppTextHeader>
      <LoginButtons continueLogin={continueLogin} />
      <AppButton text="Sign In" onPress={toSignin} />
      <GetLottie
        wrapStyle={[GS.justifyStart, GS.marginTop64]}
        source={LottieFiles.WELCOME}
        height={normalizeWidth(300)}
        autoPlay
      />
    </ScreenView>
  );
};
