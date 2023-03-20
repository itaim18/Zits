import React, { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useAppThemeColors } from "state/appState";
import { GS } from "utils/globalStyles";
import { AppText } from "./texts";

type AppButtonProps = {
  text?: string;
  bgColor?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  textStyle?: StyleProp<TextStyle>;
};
export const AppButton = ({
  text,
  bgColor,
  onPress,
  disabled,
  style,
  textStyle,
}: AppButtonProps) => {
  const appColors = useAppThemeColors();
  return (
    <TouchableOpacity
      style={[
        GS.alignSelfCenter,
        GS.borderRadius12,
        GS.paddingHorizontal64,
        GS.paddingVertical16,
        { backgroundColor: bgColor || appColors.PrimaryColor },
        disabled && { backgroundColor: appColors.SecondaryLightText },
        style,
      ]}
      onPress={onPress}
    >
      <AppText color="LightText" style={[GS.text18, GS.weight400, textStyle]}>
        {text}
      </AppText>
    </TouchableOpacity>
  );
};

type SheetOptionButtonProps = {
  text?: string;
  bgColor?: string;
  selectedColor?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  selected: boolean;
};

export const SheetOptionButton = ({
  text,
  bgColor,
  onPress,
  selectedColor,
  selected,
}: SheetOptionButtonProps) => {
  const appColors = useAppThemeColors();
  return (
    <AppButton
      style={styles.sheeOptionBtn}
      bgColor={selected ? selectedColor || appColors.SecondaryColor : bgColor}
      onPress={onPress}
      text={text}
    />
  );
};

const styles = StyleSheet.create({
  roundButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  sheeOptionBtn: {
    borderRadius: 0,
    paddingHorizontal: 0,
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
});

interface ButtonOpacityProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  animatedStyle?: StyleProp<ViewStyle>;
  children?: ReactNode;
  disabled?: boolean;
  hitSlop?: any;
  fullWidth?: boolean;
}

export const ButtonOpacity = ({
  style,
  children,
  ...props
}: ButtonOpacityProps) => {
  return (
    <TouchableOpacity style={[style]} {...props}>
      {children}
    </TouchableOpacity>
  );
};
