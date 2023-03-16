import React from "react";
import { View } from "react-native";
import { GS } from "utils/globalStyles";
import { AppInput, AppText } from "./texts";
import { useUserType } from "state/userState";
import { AppButton } from "./buttons";
import { useSetUser } from "state/userState";
type LoginCardProps = {
  handleSubmitForm: any;
};

export const LoginCard = ({ handleSubmitForm }: LoginCardProps) => {
  const setuser = useSetUser();
  const userType = useUserType();
  const nameRef = React.useRef();
  const idNumberRef = React.useRef();
  const telRef = React.useRef();
  const addressRef = React.useRef();
  const birthRef = React.useRef();

  const [name, setName] = React.useState("");
  const [idNumber, setIdNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [birth, setBirth] = React.useState("");
  const handleSubmit = (name, idNumber, address, tel, birth) => {
    setuser({ name, idNumber, address, tel, birth, userType });
    handleSubmitForm();
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
        placeholder="tel number"
        value={tel}
        inputRef={telRef}
        setValue={setTel}
      />
      <AppInput
        placeholder="birth date"
        value={birth}
        inputRef={birthRef}
        setValue={setBirth}
      />
      <AppButton
        text="submit"
        onPress={() => handleSubmit(name, idNumber, address, tel, birth)}
      />
    </View>
  );
};
