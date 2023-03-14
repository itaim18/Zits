import { GetLottie } from "components/basic/lottie";
import React, { useCallback, useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppThemeColors, useSetAppshowSplashScreen } from "state/appState";
import { Consts, LottieFiles, normalizeWidth } from "utils/globalStyles";
import { wait } from "utils/helpers";

const IconfadeInDuration = 300;

export const SplashScreen = () => {
  const appColors = useAppThemeColors();
  const setShowSplash = useSetAppshowSplashScreen();
  const fade = useSharedValue(1);
  const iconSize = useSharedValue(0);
  const iconOpacity = useSharedValue(0);

  const hideSplashScreen = useCallback(async () => {
    await wait(2000);
    fade.value = withTiming(
      0,
      { duration: 200 },
      (isFinished) => isFinished && runOnJS(setShowSplash)(false)
    );
  }, [fade, setShowSplash]);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  useEffect(() => {
    iconOpacity.value = withTiming(1, {
      duration: IconfadeInDuration,
      easing: Easing.linear,
    });
    iconSize.value = withTiming(normalizeWidth(50), {
      duration: IconfadeInDuration,
      easing: Easing.linear,
    });
  }, [iconOpacity, iconSize]);

  const fadeStyle = useAnimatedStyle(() => ({
    opacity: fade.value,
  }));

  // const iconStyle = useAnimatedStyle(() => {
  //   return {
  //     width: iconSize.value,
  //     height: iconSize.value,
  //     opacity: iconOpacity.value,
  //   };
  // });

  return (
    <Animated.View
      style={[
        styles.splashContainer,
        { backgroundColor: appColors.PrimaryBG },
        fadeStyle,
      ]}
    >
      {/* <Animated.View style={iconStyle}> */}
      <GetLottie
        source={LottieFiles.AVATAR}
        width={normalizeWidth(400)}
        height={normalizeWidth(400)}
        autoPlay
      />
      {/* {getSvgByName({name: 'LOGO', size: '100%'})} */}
      {/* </Animated.View> */}
    </Animated.View>
  );
};

export const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    top: 0,
    width: Consts.screenWidth,
    height: Consts.windowHeight,
    zIndex: 100,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});
