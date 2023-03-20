import { AppTextHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import React from "react";
import { Setting2, Notification } from "iconsax-react-native";
import { useUserType } from "state/userState";
import { View } from "react-native";
import { ScrollWrap } from "components/basic/views";
import { LogsList } from "components/basic/logsList";
export const LogsScreen = () => {
  const userType = useUserType();

  return (
    <ScrollWrap>
      <ScreenView
        style={{
          backgroundColor: "#fcf7ee",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: 320,
            marginBottom: 24,
          }}
        >
          <Notification color="black" size={24} />
          <Setting2 color="black" size={24} />
        </View>

        <AppTextHeader style={{ textAlign: "right", left: 48 }}>
          ה-zitsים שהגיעו אליך
        </AppTextHeader>
        <LogsList />
      </ScreenView>
    </ScrollWrap>
  );
};
