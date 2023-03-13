import React from 'react';
import FastImage, {FastImageProps} from 'react-native-fast-image';
import {useAppThemeColors} from 'state/appState';

export interface AppImage extends Omit<FastImageProps, 'source'> {
  uri: string;
}

export const AppImage = ({
  uri,
  style,
  onLoad,
  onTouchStart,
  ...rest
}: AppImage) => {
  const appColors = useAppThemeColors();
  return (
    <FastImage
      {...rest}
      onTouchStart={onTouchStart}
      source={{
        uri,
        priority: FastImage.priority.high,
        cache: FastImage.cacheControl.immutable,
      }}
      style={[{backgroundColor: appColors.White}, style]}
      onLoad={onLoad}
    />
  );
};
