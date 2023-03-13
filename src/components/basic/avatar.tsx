import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {FastImageProps} from 'react-native-fast-image';
import {normalizeWidth} from 'utils/globalStyles';
import {AppImage} from './appImage';
import {SkeletonLoader} from './skeletonLoader/skeletonLoader';

export interface AppAvatar extends Omit<FastImageProps, 'source'> {
  uri: string;
  size?: number;
  useLoader?: boolean;
}

export const AppAvatar = ({
  uri,
  style,
  size,
  useLoader,
  ...rest
}: AppAvatar) => {
  // loading image till it is loaded
  const [loading, setLoading] = useState(useLoader ? true : false);
  const onLoad = () => {
    setLoading(false);
  };
  // if image is loaded, render it
  return (
    <SkeletonLoader isLoading={loading}>
      <AppImage
        uri={uri}
        onLoad={useLoader ? onLoad : undefined}
        style={[
          styles.defaultAvatar,
          style,
          !!size && {width: size, height: size},
        ]}
        {...rest}
      />
    </SkeletonLoader>
  );
};

const styles = StyleSheet.create({
  defaultAvatar: {
    width: normalizeWidth(60),
    height: normalizeWidth(60),
    borderRadius: 999,
  },
});
