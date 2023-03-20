import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { GS } from "utils/globalStyles";
import { AppInput, AppText } from "./texts";
import { useUserType } from "state/userState";
import { AppButton } from "./buttons";
import { useSetUser, useUserTel } from "state/userState";
import { useFonts, Rubik_500Medium } from "@expo-google-fonts/rubik";
import { SelectList } from "react-native-dropdown-select-list";
type LoginCardProps = {
  handleSubmitForm: any;
};
const data = [
  { key: "1", value: "ערים", disabled: true },
  { key: "2", value: "תל אביב-יפו" },
  { key: "3", value: "חיפה" },
  { key: "4", value: "פתח תקווה" },
  { key: "5", value: "ירושלים" },
  { key: "6", value: "עכו" },
  { key: "7", value: "נהריה" },
];
export const LoginCard = ({ handleSubmitForm }: LoginCardProps) => {
  let [fontsLoaded] = useFonts({
    Rubik_500Medium,
  });
  const userTel = useUserTel();
  const setUser = useSetUser();

  const userType = useUserType();
  const nameRef = React.useRef();
  const cityRef = React.useRef();
  const idNumberRef = React.useRef();
  const addressRef = React.useRef();
  const birthRef = React.useRef();
  const [city, setCity] = React.useState("");
  const [name, setName] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [birth, setBirth] = React.useState("");
  const handleSubmit = async (name, idNumber, address, birth, city) => {
    await setUser({
      name,
      idNumber,
      address,
      birth,
      userType,
      tel: userTel,
      city,
    });
    await handleSubmitForm({
      user: {
        name,
        idNumber,
        address,
        birth,
        userType,
        tel: userTel,
        city,
      },
    });
  };
  if (!fontsLoaded) {
    return (
      <View>
        <Text>loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={[GS.flexOne, GS.center]}>
        <AppText style={styles.title}>עם מי יש לנו הכבוד?</AppText>
        <View style={{ alignItems: "center" }}>
          <AppInput
            value={name}
            placeholder="מה השם שלך?"
            inputRef={nameRef}
            setValue={setName}
            autoFocus
          />
          <AppInput
            placeholder="מספר התעודת זהות שלך?"
            value={idNumber}
            inputRef={idNumberRef}
            setValue={setIdNumber}
          />
          <AppInput
            placeholder="רחוב ומספר בית"
            value={address}
            inputRef={addressRef}
            setValue={setAddress}
          />
          <SelectList
            setSelected={(val) => setCity(val)}
            data={data}
            save="value"
            placeholder="בחר עיר"
            searchPlaceholder="חפש עיר"
            boxStyles={{
              direction: "rtl",
              width: 316,
              height: 48,
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
            dropdownStyles={{ direction: "rtl", marginTop: -16 }}
            dropdownTextStyles={{ direction: "rtl", textAlign: "right" }}
            disabledItemStyles={{ direction: "rtl" }}
            dropdownItemStyles={{ direction: "rtl" }}
            disabledTextStyles={{ direction: "rtl", textAlign: "right" }}
          />
          <AppInput
            placeholder="תאריך הלידה שלך?"
            value={birth}
            inputRef={birthRef}
            setValue={setBirth}
          />
          <AppButton
            text="שלח"
            onPress={() => handleSubmit(name, idNumber, address, birth, city)}
          />
        </View>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "500",
    fontSize: 28,
    lineHeight: 40,
    marginRight: 24,
    paddingVertical: 24,
    textAlign: "right",
    fontFamily: "Rubik_500Medium",
  },
});
