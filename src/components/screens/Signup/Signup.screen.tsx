import { GetLottie } from "components/basic/lottie";
import { AppButton } from "components/basic/buttons";
import { AppTextHeader, AppText } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { AppInput } from "components/basic/texts";
import { useUserType } from "state/userState";
import React from "react";
import { Strings } from "utils/strings";
import { GS, LottieFiles, normalizeWidth } from "utils/globalStyles";

export const Signup = () => {
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
  if (userType === "survivor") {
    return (
      <ScreenView style={[GS.alignCenter, GS.center, GS.paddingHorizontal32]}>
        <AppTextHeader>{userType} Registration</AppTextHeader>
        <AppInput
          value={name}
          inputRef={nameRef}
          setValue={setName}
          autoFocus
        />
        <AppInput
          value={idNumber}
          inputRef={idNumberRef}
          setValue={setName}
          autoFocus
        />
        <AppInput
          value={address}
          inputRef={addressRef}
          setValue={setAddress}
          autoFocus
        />
        <AppInput value={tel} inputRef={telRef} setValue={setTel} autoFocus />
        <AppInput
          value={birth}
          inputRef={birthRef}
          setValue={setBirth}
          autoFocus
        />

        <GetLottie
          wrapStyle={[GS.justifyStart, GS.marginTop64]}
          source={LottieFiles.WELCOME}
          height={normalizeWidth(300)}
          autoPlay
        />
      </ScreenView>
    );
  } else if (userType === "volunteer") {
    return (
      <ScreenView style={[GS.alignCenter, GS.center, GS.paddingHorizontal32]}>
        <AppTextHeader>{userType} Registration</AppTextHeader>
        <AppText>volunteers rule!</AppText>
        <GetLottie
          wrapStyle={[GS.justifyStart, GS.marginTop64]}
          source={LottieFiles.WELCOME}
          height={normalizeWidth(300)}
          autoPlay
        />
      </ScreenView>
    );
  }
};
