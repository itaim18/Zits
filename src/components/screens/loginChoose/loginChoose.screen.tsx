import { GetLottie } from "components/basic/lottie";
import { AppButton } from "components/basic/buttons";
import { AppTextHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";

import React from "react";
import { Strings } from "utils/strings";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";
import { useAppNavigation } from "hooks/common.hooks";
import { useSetUserType } from "state/userState";
export const LoginChoose = () => {
  const setUserType = useSetUserType();
  const { navigate } = useAppNavigation();

  const toRegistration = (userType) => {
    setUserType(userType);
    navigate("Signup");
  };
  return (
    <ScreenView style={[GS.alignCenter, GS.center, GS.paddingHorizontal32]}>
      <AppTextHeader>{Strings.screens.login.loginChoose}</AppTextHeader>

      <AppButton text="Survivor" onPress={() => toRegistration("survivor")} />
      <AppButton text="Volunteer" onPress={() => toRegistration("volunteer")} />

      <GetLottie
        wrapStyle={[GS.justifyStart, GS.marginTop64]}
        source={LottieFiles.WELCOME}
        height={normalizeWidth(300)}
        autoPlay
      />
    </ScreenView>
  );
};
