import { AppButton } from "components/basic/buttons";
import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { useAppNavigation } from "hooks/common.hooks";
import React from "react";
import { GS } from "utils/globalStyles";

export const HomeScreen = () => {
  const { navigate } = useAppNavigation();

  const goToSettings = () => {
    navigate("Settings");
  };

  const goToMitnadvim = () => {
    navigate("Mitnadvim");
  };

  return (
    <ScreenView edges={["left", "right", "top"]} style={[GS.alignCenter]}>
      <AppText style={[GS.text32, GS.marginBottom32]}>Elder Helper</AppText>
      <AppButton
        style={[GS.marginBottom32]}
        text="settings"
        onPress={goToSettings}
      />
      <AppButton
        style={[GS.marginBottom32]}
        text="מתנדבים"
        onPress={goToMitnadvim}
      />
      <AppButton
        style={[GS.marginBottom32]}
        text="שורדים"
        onPress={goToSettings}
      />
    </ScreenView>
  );
};
