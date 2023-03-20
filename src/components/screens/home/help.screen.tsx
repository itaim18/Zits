import { AppButton } from "components/basic/buttons";
import { AppText, AppTextHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image, TouchableHighlight, View } from "react-native";
import React from "react";

import { useUserType } from "state/userState";
import { useAppNavigation } from "hooks/common.hooks";

export const HelpScreen = () => {
  const userType = useUserType();
  const { navigate } = useAppNavigation();
  const toFinish = () => {
    navigate("Finish");
  };
  return (
    <ScreenView>
      <AppTextHeader>אפשר להתחיל להקליט</AppTextHeader>

      <TouchableHighlight
        style={{
          margin: 24,
          backgroundColor: "#80B2B0",
          padding: 32,
          paddingHorizontal: 56,
          borderRadius: 10,
          width: 320,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("assets/images/OBJECTS.png")}
            style={{ right: 48 }}
          />

          <TouchableHighlight
            style={{
              backgroundColor: "#E8E4D8",
              borderRadius: 100,
              padding: 18,
              position: "absolute",
              left: 160,
              alignSelf: "center",
            }}
          >
            <Image
              source={require("assets/images/microphone.png")}
              style={{
                width: 48,
                height: 48,
              }}
            />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>

      <AppButton
        text="סיימתי להקליט"
        bgColor="#426D6B"
        style={{ width: 320, top: 48 }}
        onPress={toFinish}
      />
    </ScreenView>
  );
};
