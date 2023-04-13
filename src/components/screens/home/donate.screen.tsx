import {
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import React from "react";
import bgImage from "../../../assets/images/bg2.png";
import {
  AppTextHeader,
  AppText,
  AppTextSubHeader,
} from "components/basic/texts";
import { AppButton } from "components/basic/buttons";
import { GS } from "utils/globalStyles";
import { LinearGradient } from "expo-linear-gradient";
import bit from "../../../assets/images/bit.png";
export const Donate = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fcf7ee" }}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{ top: 100, height: 640 }}
        >
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#F7D8D4",
              position: "absolute",
              borderRadius: 100,
              left: 25,
              top: -35,
            }}
          ></View>
          <View
            style={{
              height: 620,
              bottom: 60,
            }}
          >
            <AppTextHeader>תzitsו את זה הלאה</AppTextHeader>
            <TouchableOpacity style={[GS.alignSelfCenter]}>
              <LinearGradient
                colors={["#3DB6BC", "#093d75"]}
                style={[
                  GS.borderRadius12,
                  GS.alignSelfCenter,
                  GS.paddingHorizontal32,
                  GS.paddingVertical8,
                  {
                    top: 160,
                    borderRadius: 12,
                    display: "flex",
                    flexDirection: "row-reverse",
                    width: 277,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                  },
                ]}
              >
                <Image
                  source={bit}
                  style={{
                    width: 64,
                    height: 72,
                  }}
                />
                <AppText
                  style={{
                    color: "white",
                    fontSize: 20,
                    bottom: 16,
                  }}
                >
                  תעזור לנו להמשיך
                </AppText>
              </LinearGradient>
            </TouchableOpacity>
            <AppTextSubHeader
              style={{
                top: 240,
                width: 320,
                textAlign: "center",
                alignSelf: "center",
              }}
            >
              אם תתרמו לנו כסף זה יהיה נחמד ובלה בלה בלה בכלל זה טוב מה שכתוב פה
              כי זה דברים אמיתיים ומרגשים שיפתחו לכם את הלב וטיפה את הכיס אז
              בואו תעשו עוד מאמץ קטן כדי לקרוא עד סוף השורה זאת.
            </AppTextSubHeader>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
