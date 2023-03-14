import { AppButton } from "components/basic/buttons";
import { GetLottie } from "components/basic/lottie";
import { ScreenView } from "components/basic/views";
import { useAppNavigation } from "hooks/common.hooks";
import { useLogin } from "hooks/useLogin.hook";
import React from "react";
import { StyleSheet, Switch } from "react-native";
import {
  useAppIsDarkMode,
  useAppThemeColors,
  useSetAppIsDarkMode,
} from "state/appState";
import { useUser } from "state/userState";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";

const userAvatarSize = normalizeWidth(150);

export const SettingsScreen = () => {
  const { logoutUser } = useLogin();
  const { navigate } = useAppNavigation();
  const setDarkMode = useSetAppIsDarkMode();
  const appColors = useAppThemeColors();
  const isAppDark = useAppIsDarkMode();
  const user = useUser()!;

  const goHome = () => {
    navigate("Home");
  };

  const switchDark = () => {
    setDarkMode((isDark) => !isDark);
  };

  return (
    <ScreenView style={[GS.alignCenter]} dimissKeyboardOnTouch>
      {/* {user.photos[0] && (
        <AppAvatar
          uri={user.photos[0]}
          style={[
            {
              width: userAvatarSize,
              height: userAvatarSize,
              borderRadius: userAvatarSize / 2,
            },
            GS.marginTop16,
            styles.avatar,
          ]}
        />
      )} */}
      <AppButton style={[GS.marginTop32]} text="Home" onPress={goHome} />
      <AppButton style={[GS.marginTop16]} text="Logout" onPress={logoutUser} />
      <Switch
        style={[GS.alignSelfCenter, GS.marginTop16]}
        thumbColor={appColors.PrimaryColor}
        trackColor={{
          true: appColors.LoaderColor,
          false: appColors.SecondaryLightText,
        }}
        value={isAppDark}
        onChange={switchDark}
      />
      <GetLottie
        source={LottieFiles.SPLASH}
        width={normalizeWidth(200)}
        height={normalizeWidth(200)}
        autoPlay
      />
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(216,51,91, .5)",
  },
});
