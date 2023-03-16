import React from "react";
import { View } from "react-native";
import { GS } from "utils/globalStyles";
import { AppInput, AppText } from "./texts";
import { useUser, useUserType } from "state/userState";
import { AppButton } from "./buttons";
import { useSetUser, useUserTel } from "state/userState";
type LoginCardProps = {
  handleSubmitForm: any;
};

export const LoginCard = ({ handleSubmitForm }: LoginCardProps) => {
  const userTel = useUserTel();
  const setUser = useSetUser();

  const userType = useUserType();
  const nameRef = React.useRef();
  const idNumberRef = React.useRef();
  const addressRef = React.useRef();
  const birthRef = React.useRef();

  const [name, setName] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  const [birth, setBirth] = React.useState("");
  const handleSubmit = async (name, idNumber, address, birth) => {
    await setUser({ name, idNumber, address, birth, userType, tel: userTel });
    await handleSubmitForm({
      user: {
        name,
        idNumber,
        address,
        birth,
        userType,
        tel: userTel,
      },
    });
  };
  return (
    <View style={[GS.center, GS.flexOne]}>
      <AppText>{userType} login</AppText>
      <AppInput
        value={name}
        placeholder="name"
        inputRef={nameRef}
        setValue={setName}
        autoFocus
      />
      <AppInput
        placeholder="id number"
        value={idNumber}
        inputRef={idNumberRef}
        setValue={setIdNumber}
      />
      <AppInput
        placeholder="address"
        value={address}
        inputRef={addressRef}
        setValue={setAddress}
      />

      <AppInput
        placeholder="birth date"
        value={birth}
        inputRef={birthRef}
        setValue={setBirth}
      />
      <AppButton
        text="submit"
        onPress={() => handleSubmit(name, idNumber, address, birth)}
      />
    </View>
  );
};
