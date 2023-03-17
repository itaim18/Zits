import { AppButton } from "components/basic/buttons";
import { AppText, AppTextHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image, StyleSheet } from "react-native";
import React from "react";

import { useUserType } from "state/userState";

export const StartScreen = () => {
  const userType = useUserType();

  return (
    <ScreenView>
      <AppTextHeader>ברוכות וברוכים הבאים</AppTextHeader>
      <AppTextHeader>נעים להכיר, אנחנו</AppTextHeader>
      <Image source={require("assets/images/start.png")} />
      <AppTextHeader style={styles.par}>
        המקום שבו יתאפשר לך להפיג את הבדידות ולקבל עזרה בכל דבר שתחפוץ בלחיצת
        כפתור
      </AppTextHeader>
      <AppButton bgColor="#426D6B" text="כאן מתחילים" style={styles.btn} />
    </ScreenView>
  );
};
const styles = StyleSheet.create({
  par: {
    width: 320,
    // height: "106px",
    // left: 29px,
    // top: 400px,

    // font-family: 'Rubik',
    // font-style: normal,
    fontWeight: "300",
    marginTop: "42px",
    // font-size: 28px,
    // line-height: 22px,
    // /* or 79% */

    // text-align: center,
    // letter-spacing: -0.408px,
  },
  btn: {
    position: "absolute",
    width: 320,
    // height: 44px;
    top: 640,
    // boxShadow: "2px 2px 16px rgba(0, 0, 0, 0.08)",
    // borderRadius: "8px",
  },
});
