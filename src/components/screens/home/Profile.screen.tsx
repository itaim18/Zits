import {
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import bgImage from "../../../assets/images/bg.png";
import profileDefault from "../../../assets/images/profileDefault.png";
import { AppTextHeader, AppText } from "components/basic/texts";
import { ProfileField } from "components/basic/profileField";
import { ScrollView } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const DATA = [
  { name: "שם", input: "איתי מייזליש" },
  { name: "עיר", input: "פתח תקווה" },
  { name: "תאריך", input: "03.04.2000" },
];
const items = [
  {
    key: "92iijs7yta",
    value: "עברית",
  },
  {
    key: "a0s0a8ssbsd",
    value: "English",
  },
  {
    key: "16hbajsabsd",
    value: "Русский язык",
  },
  {
    key: "nahs75a5sg",
    value: "ייִדיש",
  },
  {
    key: "667atsas",
    value: "Deutsch",
  },
  {
    key: "hsyasajs",
    value: "polski",
  },
];
export const Profile = () => {
  const [languages, setLanguages] = React.useState([]);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#fcf7ee" }}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{ top: 100, height: 720 }}
        >
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: "#F7D8D4",
              position: "absolute",
              borderRadius: 100,
              right: 25,
              top: -35,
            }}
          ></View>
          <View
            style={{
              height: 680,
              bottom: 60,
              alignItems: "center",
            }}
          >
            <AppTextHeader>הzits שלי</AppTextHeader>
            <View
              style={{
                width: 120,
                height: 120,
                borderRadius: 100,
                backgroundColor: "#ccc",
                justifyContent: "center",
                margin: "auto",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Image
                source={profileDefault}
                alt="profile"
                style={{
                  position: "relative",
                  zIndex: 8,
                }}
              />
            </View>
            {DATA.map((input) => (
              <ProfileField input={input} />
            ))}
            <AppText
              style={{
                textAlign: "right",
                alignSelf: "flex-end",
                marginRight: 48,
                fontSize: 20,
              }}
            >
              שפות:
            </AppText>
            <MultipleSelectList
              setSelected={(val) => setLanguages(val)}
              data={items}
              save="value"
              label="שפות"
              placeholder="בחר שפה"
              searchPlaceholder="חפש שפה"
              boxStyles={{
                direction: "rtl",
                width: 300,
                height: 46,
                marginBottom: 16,
                borderColor: "#111",
                display: "flex",
                flexDirection: "row-reverse",
                borderRadius: 12,
              }}
              inputStyles={{
                fontSize: 18,
                color: "#727272",
                direction: "rtl",
                textAlign: "right",
              }}
              dropdownStyles={{
                direction: "rtl",
                marginTop: -16,
                width: 300,
                height: 120,
              }}
              dropdownTextStyles={{ direction: "rtl", textAlign: "right" }}
              disabledItemStyles={{ direction: "rtl" }}
              dropdownItemStyles={{ direction: "rtl" }}
              disabledTextStyles={{ direction: "rtl", textAlign: "right" }}
              badgeStyles={{
                direction: "rtl",
                justifyContent: "flex-start",
                backgroundColor: "#426D6B",
                height: 32,
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};
