import { ButtonOpacity } from "components/basic/buttons";
import { AppText } from "components/basic/texts";
import { useLogin } from "hooks/useLogin.hook";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useAppThemeColors } from "state/appState";
import { GS } from "utils/globalStyles";
import { Strings } from "utils/strings";

export const LoginButtons = () => {
  const { loginGoogle, isLoading } = useLogin();

  return (
    <View style={[GS.marginTop64, GS.fullWidth]}>
      <LoginButton
        text={Strings.screens.login.googleLogin}
        onPress={loginGoogle}
        // icon={"GOOGLE"}
        loading={isLoading}
        disabled={isLoading}
      />
      {/* <LoginButton
        text={Strings.appleLogin}
        onPress={loginGoogle}
        icon={'APPLE'}
      /> */}
    </View>
  );
};

type LoginButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  loading?: boolean;
};

const LoginButton = ({
  onPress,
  text,
  disabled,
  loading,
}: LoginButtonProps) => {
  const appColors = useAppThemeColors();
  return (
    <ButtonOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        GS.row,
        GS.center,
        GS.border1,
        { backgroundColor: appColors.SecondaryBG },
        { borderColor: appColors.SecondaryColor },
        GS.paddingHorizontal24,
        GS.paddingVertical16,
        GS.borderRadius16,
        GS.marginBottom16,
      ]}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={appColors.SecondaryColor} />
      ) : (
        <>
          <AppText style={[GS.marginLeft16, GS.weight500, GS.text16]}>
            {text}
          </AppText>
        </>
      )}
    </ButtonOpacity>
  );
};
