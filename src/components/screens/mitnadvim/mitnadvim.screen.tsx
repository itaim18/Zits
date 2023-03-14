import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { useAppNavigation } from "hooks/common.hooks";
import React from "react";
import { GS } from "utils/globalStyles";

export const MitnadvimScreen = () => {
  const { navigate } = useAppNavigation();

  const goToSettings = () => {
    navigate("Settings");
  };

  const goToMitnadvim = () => {
    navigate("Mitnadvim");
  };

  return (
    <ScreenView edges={["left", "right", "top"]} style={[GS.alignCenter]}>
      <AppText style={[GS.text32, GS.marginBottom32]}>Mitnadvim Screen</AppText>
    </ScreenView>
  );
};
