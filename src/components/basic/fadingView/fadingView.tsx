import React, {ReactNode, useEffect, useState} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const fadeDuration = 500;

export interface FadeLoaderViewProps {
  children: ReactNode;
  isLoading: boolean;
  style?: StyleProp<ViewStyle>;
}

export const FadingView = ({
  isLoading,
  children,
  style,
}: FadeLoaderViewProps) => {
  const [showLoader, setShowLoader] = useState(false);
  const fadeAnimation = useSharedValue(1);

  useEffect(() => {
    if (!isLoading) {
      fadeAnimation.value = withTiming(
        0,
        {duration: fadeDuration},
        isFinished => isFinished && runOnJS(setShowLoader)(false),
      );
    } else {
      fadeAnimation.value = 1;
      setShowLoader(true);
    }
  }, [fadeAnimation, isLoading]);

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: fadeAnimation.value,
  }));

  if (!showLoader) {
    return null;
  }

  return (
    <Animated.View style={[styles.fadeContainer, fadeStyle, style]}>
      {children}
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  fadeContainer: {
    // width: '100%',
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // zIndex: 10,
  },
});
