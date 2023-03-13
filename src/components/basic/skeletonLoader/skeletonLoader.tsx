import MaskedView from '@react-native-masked-view/masked-view';
import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {
  LayoutChangeEvent,
  LayoutRectangle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Reanimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useAppThemeColors} from 'state/appState';
import {GS} from 'utils/globalStyles';
import {ColorKeys} from 'utils/types';
import {FadingView} from '../fadingView/fadingView';

const SPEED = 800;

type SkeletonLoaderProps = {
  children: ReactNode;
  backgroundColor?: ColorKeys;
  highlightColor?: ColorKeys;
  isLoading?: boolean;
};

export const SkeletonLoader = ({
  children,
  isLoading = true,
  backgroundColor,
  highlightColor,
}: SkeletonLoaderProps) => {
  const appColors = useAppThemeColors();
  const [layout, setLayout] = useState<LayoutRectangle>();
  const shared = useSharedValue(0);

  useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: SPEED}), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shared.value,
          [0, 1],
          [layout ? -layout.width : 0, layout ? layout.width : 0],
        ),
      },
    ],
  }));

  if (!layout?.width && !layout?.height) {
    return (
      <View
        onLayout={(event: LayoutChangeEvent) =>
          setLayout(event.nativeEvent.layout)
        }>
        {children}
      </View>
    );
  }

  return (
    <View style={[GS.alignSelfCenter]}>
      <FadingView isLoading={isLoading}>
        <MaskedView
          style={{height: layout.height, width: layout.width}}
          maskElement={<View>{children}</View>}>
          <View
            style={[
              styles.background,
              {
                backgroundColor: backgroundColor
                  ? appColors[backgroundColor]
                  : appColors.LoaderColor,
              },
            ]}
          />
          <Reanimated.View style={[animatedStyles, StyleSheet.absoluteFill]}>
            <MaskedView
              style={StyleSheet.absoluteFill}
              maskElement={
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={StyleSheet.absoluteFill}
                  colors={['transparent', 'black', 'transparent']}
                />
              }>
              <View
                style={[
                  StyleSheet.absoluteFill,
                  {
                    backgroundColor: highlightColor
                      ? appColors[highlightColor]
                      : appColors.BrushColor,
                  },
                ]}
              />
            </MaskedView>
          </Reanimated.View>
        </MaskedView>
      </FadingView>
      {!isLoading && children}
    </View>
  );
};

type LoaderProps = {
  style: StyleProp<ViewStyle>;
};

export const Loader = ({style}: LoaderProps) => {
  return <View style={[style ? style : styles.loaderSize, styles.loader]} />;
};

const styles = StyleSheet.create({
  loader: {backgroundColor: '#fff'},
  loaderSize: {width: 100, height: 100},
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
