import React, {ReactNode, RefObject} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextProps,
  TextStyle,
  View,
} from 'react-native';
import Animated, {
  AnimatedStyleProp,
  SharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import {useAppThemeColors} from 'state/appState';
import {GS, normalizeHeight, normalizeWidth} from 'utils/globalStyles';
import {ColorKeys} from 'utils/types';

export interface AppTextProps extends TextProps {
  children: ReactNode;
  isBold?: boolean;
  style?: StyleProp<TextStyle>;
  animatedStyle?: AnimatedStyleProp<TextStyle>;
  color?: ColorKeys;
  isDark?: boolean;
}

export const AppTextHeader = ({children, style}: AppTextProps) => {
  return (
    <AppText style={[GS.textAlignCenter, GS.bold, GS.text28, style]}>
      {children}
    </AppText>
  );
};

export const AppTextSubHeader = ({
  children,
  style,
  isDark,
  ...props
}: AppTextProps) => {
  return (
    <AppText
      isDark={isDark}
      style={[GS.textAlignCenter, GS.weight500, GS.text22, style]}
      {...props}>
      {children}
    </AppText>
  );
};

export const AppText = ({
  children,
  isBold,
  animatedStyle,
  style,
  color,
  isDark,
}: AppTextProps) => {
  const appColors = useAppThemeColors();
  return (
    <Animated.Text
      style={[
        GS.textAlignCenter,
        GS.removeFontPadding,
        isBold && GS.bold,
        {
          color: color
            ? appColors[color]
            : isDark
            ? appColors.LightText
            : appColors.DarkText,
        },
        style,
        animatedStyle,
      ]}>
      {children}
    </Animated.Text>
  );
};

type AppInputProps = {
  inputRef: RefObject<TextInput>;
  value: string;
  setValue: (input: string) => void;
  style?: StyleProp<TextStyle>;
  autoFocus?: boolean;
  errorMess?: string;
};

export const AppInput = ({
  inputRef,
  value,
  setValue,
  style,
  autoFocus,
  errorMess = '',
}: AppInputProps) => {
  const appColors = useAppThemeColors();
  return (
    <View style={[GS.alignStart, styles.inputWrap]}>
      <TextInput
        style={[
          GS.fullWidth,
          GS.removeFontPadding,
          GS.text18,
          styles.input,
          {color: appColors.DarkText, borderColor: appColors.DarkText},
          style,
        ]}
        autoFocus={autoFocus}
        ref={inputRef}
        value={value}
        onChangeText={setValue}
        placeholderTextColor={appColors.SecondaryLightText}
        placeholder="Name"
      />
      <AppText color="Error" style={[GS.marginLeft8, styles.errMsg]}>
        {errorMess}
      </AppText>
    </View>
  );
};

export interface LabelProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const AnimatedText = ({text}: {text: SharedValue<string>}) => {
  const animatedProps = useAnimatedProps(() => {
    return {
      text: text.value,
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      style={[GS.removeFontPadding]}
      value={text.value}
      animatedProps={animatedProps as any}
    />
  );
};

const styles = StyleSheet.create({
  inputWrap: {
    width: '80%',
  },
  input: {
    paddingHorizontal: normalizeWidth(12),
    paddingVertical: normalizeHeight(10),
    borderWidth: 1,
    borderRadius: 12,
  },
  errMsg: {
    textAlign: 'left',
  },
});
