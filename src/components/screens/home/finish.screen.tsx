import { AppButton } from "components/basic/buttons";
import {
  AppText,
  AppTextHeader,
  AppTextSubHeader,
} from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image, View } from "react-native";
import React from "react";

import { useUserType } from "state/userState";
import { useAppNavigation } from "hooks/common.hooks";

export const FinishScreen = () => {
  const userType = useUserType();
  const { navigate } = useAppNavigation();
  const toRecord = () => {
    navigate("Record");
  };
  return (
    <ScreenView>
      <View
        style={{
          backgroundColor: "#F7D8D4",
          width: 54,
          height: 54,
          top: 24,
          left: 182,
          borderRadius: 50,
          position: "absolute",
        }}
      />
      <Image source={require("assets/images/search.png")} />
      <AppTextHeader
        style={{ fontSize: 24, marginVertical: 42, marginHorizontal: 16 }}
      >
        עוד כמה רגעים נמצא את האדם המתאים ביותר עבור הצורך שלך{" "}
      </AppTextHeader>
      <AppTextSubHeader style={{ marginHorizontal: 80, marginBottom: 48 }}>
        ברגע שתתבצע התאמה, יצרו איתך קשר דרך הטלפון
      </AppTextSubHeader>
      <Image source={require("assets/images/warning.png")} />
      <AppButton
        onPress={toRecord}
        text="תודה רבה"
        style={{ width: 320, marginTop: 64 }}
        bgColor="#426D6B"
      />
    </ScreenView>
  );
};
