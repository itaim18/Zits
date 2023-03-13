import LottieView from 'lottie-react-native';
import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {GS} from 'utils/globalStyles';

type LottieProps = {
  source: string;
  style?: StyleProp<ViewStyle>;
  wrapStyle?: StyleProp<ViewStyle>;
  loop?: boolean;
  autoPlay?: boolean;
  width?: number | string;
  height?: number | string;
};

export const GetLottie = ({
  source,
  style,
  loop,
  autoPlay,
  width,
  height,
  wrapStyle,
}: LottieProps) => {
  return (
    <View style={[GS.center, GS.flexOne, wrapStyle]}>
      <LottieView
        source={source}
        style={[style, {width, height}]}
        loop={loop}
        autoPlay={autoPlay}
      />
    </View>
  );
};
