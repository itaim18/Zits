import { AppButton } from "components/basic/buttons";
import { AppTextHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image, StyleSheet } from "react-native";
import React from "react";
import { useAppNavigation } from "hooks/common.hooks";

export const StartScreen = () => {
  const { navigate } = useAppNavigation();
  const toRecord = () => {
    navigate("Record");
  };
  return (
    <ScreenView>
      <AppTextHeader>ברוכות וברוכים הבאים</AppTextHeader>
      <AppTextHeader>נעים להכיר, אנחנו</AppTextHeader>
      <Image source={require("assets/images/start.png")} />
      <AppTextHeader style={styles.par}>
        המקום שבו יתאפשר לך להפיג את הבדידות ולקבל עזרה בכל דבר שתחפוץ בלחיצת
        כפתור
      </AppTextHeader>
      <AppButton
        bgColor="#426D6B"
        text="כאן מתחילים"
        style={styles.btn}
        onPress={toRecord}
      />
    </ScreenView>
  );
};
const styles = StyleSheet.create({
  par: {
    width: 320,
    fontWeight: "300",
    marginTop: 42,
  },
  btn: {
    position: "absolute",
    width: 320,
    top: 640,
  },
});
