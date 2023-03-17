import { AppButton } from "components/basic/buttons";
import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image } from "react-native";
import React from "react";

import { useUserType } from "state/userState";

export const HelpScreen = () => {
  const userType = useUserType();

  return (
    <ScreenView>
      <AppText>ברוכות וברוכים הבאים</AppText>
      <AppText>נעים להכיר, אנחנו</AppText>
      <Image source={require("assets/images/start.png")} />
      <AppText>
        המקום שבו יתאפשר לך להפיג את הבדידות ולקבל עזרה בכל דבר שתחפוץ בלחיצת
        כפתור
      </AppText>
      <AppButton text="כאן מתחילים" />
    </ScreenView>
  );
};
