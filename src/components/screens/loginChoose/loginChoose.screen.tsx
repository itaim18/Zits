import { AppButton } from "components/basic/buttons";
import { AppTextHeader, AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Dimensions, View, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Strings } from "utils/strings";
import { GS } from "utils/globalStyles";
import { useAppNavigation } from "hooks/common.hooks";
import { useSetUserType } from "state/userState";
const { width } = Dimensions.get("window");
const height = width * 0.8;
export const LoginChoose = () => {
  const setUserType = useSetUserType();
  const { navigate } = useAppNavigation();
  const images = [
    {
      text: "לעזור",
      source: require("assets/images/be.png"),
    },
    {
      text: "להתחבר",
      source: require("assets/images/connect.png"),
    },
    {
      text: "לספר",
      source: require("assets/images/tell.png"),
    },
    {
      text: "להיות",
      source: require("assets/images/help.png"),
    },
  ];
  const toRegistration = (userType) => {
    setUserType(userType);
    navigate("Signup");
  };

  return (
    <ScreenView style={[GS.center]}>
      <AppTextHeader style={{ textAlign: "right" }}>
        {Strings.screens.login.loginChoose}
      </AppTextHeader>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
        >
          {images?.map((image) => (
            <View
              style={{ display: "flex", flexDirection: "column", height: 480 }}
            >
              <Image style={styles.image} source={image.source} />
              <AppText
                style={[
                  GS.paddingHorizontal16,
                  {
                    width,
                    top: 0,
                    right: 120,
                    fontSize: 36,
                    position: "absolute",
                    zIndex: 5,
                    color: "#2c2c2c",
                  },
                ]}
              >
                {image.text}
              </AppText>
            </View>
          ))}
        </ScrollView>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 24,
          padding: 24,
        }}
      >
        <AppButton
          text="שורד"
          onPress={() => toRegistration("survivor")}
          style={{ padding: 48, marginRight: 24 }}
        />
        <AppButton text="מתנדב" onPress={() => toRegistration("volunteer")} />
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    height: height * 1.5,
    direction: "rtl",
  },
  image: {
    width,
    height: height * 1.5,
  },
});
