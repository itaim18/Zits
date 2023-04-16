import { ImageBackground, View, Text, Image } from "react-native";
import React from "react";

import { AppInput, AppText } from "./texts";
export const ProfileField = ({ input }) => {
  const [name, setName] = React.useState(input.input);
  const nameRef = React.useRef();
  return (
    <>
      <AppText
        style={{
          textAlign: "right",
          alignSelf: "flex-end",
          marginRight: 48,
          fontSize: 20,
        }}
      >
        {input.name}:
      </AppText>
      <AppInput
        value={name}
        placeholder={`מה ה${input.name} שלך?`}
        inputRef={nameRef}
        setValue={setName}
        autoFocus
      />
    </>
  );
};
