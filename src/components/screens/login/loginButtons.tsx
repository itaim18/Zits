import { ButtonOpacity } from "components/basic/buttons";
import { AppText } from "components/basic/texts";
import React from "react";
import {
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  StyleSheet,
} from "react-native";
import { useAppThemeColors } from "state/appState";
import { GS } from "utils/globalStyles";

import { Strings } from "utils/strings";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../../firebaseConfig";
import { useSetUserIsLoggedIn } from "state/userState";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useAppNavigation } from "hooks/common.hooks";

export const LoginButtons = ({ continueLogin }) => {
  const { navigate } = useAppNavigation();
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [value, setValue] = React.useState("");
  const [showCode, setShowCode] = React.useState(false);

  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const sendVerification = () => {
    const toggleCodeInput = () => {
      setShowCode((prevState) => !prevState);
    };
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
    toggleCodeInput();
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      value
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setValue("");
        navigate("LoginChoose");
      })
      .catch((err) => alert(err));

    Alert.alert("Login successful. welcome to elder-helper!");
  };

  return (
    <View style={[GS.marginTop64, GS.fullWidth]}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      {!showCode && (
        <>
          <TextInput
            placeholder="phone"
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            autoComplete="tel"
          />
          <TouchableOpacity onPress={sendVerification}>
            <Text>send code</Text>
          </TouchableOpacity>
        </>
      )}
      {showCode && (
        <>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />

          <TouchableOpacity onPress={confirmCode}>
            <Text>complete sign up</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

type LoginButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  loading?: boolean;
};

const LoginButton = ({
  onPress,
  text,
  disabled,
  loading,
}: LoginButtonProps) => {
  const appColors = useAppThemeColors();
  return (
    <ButtonOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        GS.row,
        GS.center,
        GS.border1,
        { backgroundColor: appColors.SecondaryBG },
        { borderColor: appColors.SecondaryColor },
        GS.paddingHorizontal24,
        GS.paddingVertical16,
        GS.borderRadius16,
        GS.marginBottom16,
      ]}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={appColors.SecondaryColor} />
      ) : (
        <>
          <AppText style={[GS.marginLeft16, GS.weight500, GS.text16]}>
            {text}
          </AppText>
        </>
      )}
    </ButtonOpacity>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
