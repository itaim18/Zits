import { GetLottie } from "components/basic/lottie";
import { AppButton } from "components/basic/buttons";
import { AppTextHeader, AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Dimensions, View, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { Strings } from "utils/strings";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";
import { useAppNavigation } from "hooks/common.hooks";
import { useSetUserType } from "state/userState";
const { width } = Dimensions.get("window");
const height = width * 0.8;
export const LoginChoose = () => {
  const setUserType = useSetUserType();
  const { navigate } = useAppNavigation();
  const images = [
    {
      text: "connect",
      source: {
        uri: "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
      },
    },
    {
      text: "help",
      source: {
        uri: "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
      },
    },
    {
      text: "love",
      source: {
        uri: "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
      },
    },
    {
      text: "be",
      source: {
        uri: "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg",
      },
    },
  ];
  const toRegistration = (userType) => {
    setUserType(userType);
    navigate("Signup");
  };

  return (
    <ScreenView style={[GS.alignCenter, GS.center]}>
      <AppTextHeader>{Strings.screens.login.loginChoose}</AppTextHeader>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={true}
        >
          {images?.map((image) => (
            <View style={{ display: "flex", flexDirection: "column" }}>
              {/* <Image style={styles.image} source={image.source} /> */}
              <AppText style={[GS.paddingHorizontal16, { width }]}>
                {image.text}
              </AppText>
            </View>
          ))}
        </ScrollView>
      </View>
      <AppButton text="Survivor" onPress={() => toRegistration("survivor")} />
      <AppButton text="Volunteer" onPress={() => toRegistration("volunteer")} />
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
    height,
  },
  image: {
    width,
    height,
  },
});
