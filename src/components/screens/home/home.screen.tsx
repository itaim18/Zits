import { AppButton } from "components/basic/buttons";
import { AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import React from "react";
import { GS } from "utils/globalStyles";
import { useUserType } from "state/userState";
import { LogsList } from "components/basic/logsList";
import * as Notifications from "expo-notifications";

export const HomeScreen = () => {
  const userType = useUserType();
  const sendPushNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "שלמה צריך אותך",
        body: "הוא רוצה לראות מישהו",
      },
      trigger: null,
    });
  };

  if (userType === "survivor") {
    return (
      <ScreenView edges={["left", "right", "top"]} style={[GS.alignCenter]}>
        <AppText style={[GS.text32, GS.marginBottom32]}>Elder Helper</AppText>
        <AppButton text="אני צריך אותך" onPress={sendPushNotification} />
      </ScreenView>
    );
  } else if (userType === "volunteer") {
    return (
      <ScreenView edges={["left", "right", "top"]} style={[GS.alignCenter]}>
        <AppText style={[GS.text32, GS.marginBottom32]}>Elder Helper</AppText>
        <LogsList />
      </ScreenView>
    );
  }
};
