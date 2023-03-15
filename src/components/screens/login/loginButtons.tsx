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
} from "react-native";
import { useAppThemeColors } from "state/appState";
import { GS } from "utils/globalStyles";
import { Strings } from "utils/strings";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "../../../../firebaseConfig";

export const LoginButtons = () => {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [verificationId, setVerificationId] = React.useState("");
  const [verificationCode, setVerificationCode] = React.useState("");
  const [showCode, setShowCode] = React.useState(false);
  const sendVerification = () => {
    const toggleCodeInput = () => {
      setShowCode((prevState) => !prevState);
    };
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    console.log("hey there");
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId);
    setPhoneNumber("");
    toggleCodeInput();
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => setVerificationCode(""))
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
          <TextInput
            placeholder="code"
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
            autoComplete="tel"
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
