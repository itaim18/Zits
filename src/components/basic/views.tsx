import React, {FC, memo, ReactNode} from 'react';
import {
  GestureResponderEvent,
  Keyboard,
  LayoutChangeEvent,
  LayoutRectangle,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {AnimatedStyleProp} from 'react-native-reanimated';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {useAppThemeColors} from 'state/appState';
import {GS} from 'utils/globalStyles';

export interface ChildrenView {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  onTouchStart?: () => void;
  dimissKeyboardOnTouch?: boolean;
  sidePadding?: boolean;
  edges?: Edge[];
  withTabs?: boolean;
  bounces?: boolean;
  closeSheetOnClose?: boolean;
  scrollEnabled?: boolean;
  withScrollView?: boolean;
}

export const ScreenView: FC<ChildrenView> = ({
  children,
  style,
  onTouchStart,
  edges,
  dimissKeyboardOnTouch = false,
}) => {
  const appColors = useAppThemeColors();
  const onTouch = () => {
    onTouchStart && onTouchStart();
    dimissKeyboardOnTouch && Keyboard.dismiss();
  };

  return (
    <SafeAreaView
      onTouchStart={onTouch}
      edges={edges}
      style={[
        GS.flexOne,
        GS.justifyStart,
        GS.alignCenter,
        {backgroundColor: appColors.PrimaryBG},
        style,
      ]}>
      {children ? children : null}
    </SafeAreaView>
  );
};

interface ScrollWrapProps extends ScrollViewProps {
  withScrollView?: boolean;
  children?: ReactNode;
}

export const ScrollWrap = ({
  withScrollView,
  children,
  ...props
}: ScrollWrapProps) => {
  return withScrollView ? (
    <ScrollView {...props}>{children}</ScrollView>
  ) : (
    <View style={[GS.flexOne, props.style]} onTouchStart={props.onTouchStart}>
      {children}
    </View>
  );
};

export interface ComponentViewProps {
  children?: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
  animatedStyle?: AnimatedStyleProp<ViewStyle>;
  onLayout?: (event: LayoutRectangle) => void;
  onTouchStart?: (event: GestureResponderEvent) => void;
}

export const ComponentView = memo(
  ({
    children,
    style,
    animatedStyle,
    onTouchStart,
    onLayout,
  }: ComponentViewProps) => {
    const onLayoutEvent = (event: LayoutChangeEvent) => {
      const layout = event.nativeEvent.layout;
      onLayout && onLayout(layout);
    };
    return (
      <Animated.View
        onTouchStart={e => {
          onTouchStart && onTouchStart(e as any);
          // e.stopPropagation();
        }}
        // onStartShouldSetResponder={(_event: any) => true}
        onLayout={onLayoutEvent}
        style={[GS.center, style, animatedStyle]}>
        {children}
      </Animated.View>
    );
  },
);
