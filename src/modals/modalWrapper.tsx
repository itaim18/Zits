import {useAppNavigation} from 'hooks/common.hooks';
import React, {ReactNode} from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {GS, normalizeWidth} from 'utils/globalStyles';

type ModalWrapProps = {
  shouldCloseOnPressOut?: boolean;
  style?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const ModalWrap = ({
  children,
  shouldCloseOnPressOut = true,
  modalContainerStyle,
  style,
}: ModalWrapProps) => {
  const {goBack} = useAppNavigation();
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={[styles.modalContainer, modalContainerStyle]}>
      <Pressable
        style={[StyleSheet.absoluteFill]}
        onPress={shouldCloseOnPressOut ? goBack : null}
      />
      <Animated.View style={[GS.center, styles.modal, style]}>
        {children}
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignSelfEnd: {alignSelf: 'flex-end'},
  modal: {
    opacity: 1,
    marginTop: 'auto',
    minWidth: normalizeWidth(100),
    borderRadius: normalizeWidth(16),
  },
  padding: {padding: normalizeWidth(4)},
});
