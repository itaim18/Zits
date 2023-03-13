import {getSvgByName, SVGS} from 'assets';
import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {useAppIsDarkMode, useAppThemeColors} from 'state/appState';
import {normalizeWidth} from 'utils/globalStyles';
import {ColorKeys} from 'utils/types';
type AppIconProps = {
  icon: SVGS;
  selected?: boolean;
  defaultIcon?: boolean;
  withDark?: boolean;
  fill?: ColorKeys;
  style?: StyleProp<ViewStyle>;
};

export const AppIcon = ({
  icon,
  selected,
  defaultIcon,
  withDark = true,
  fill = 'LightText',
  style,
}: AppIconProps) => {
  const appColors = useAppThemeColors();
  const isDarkMode = useAppIsDarkMode();
  const iconName = useMemo((): SVGS => {
    if (selected) {
      return `${icon}_SELECTED` as SVGS;
    } else if (defaultIcon) {
      return `${icon}_DEFAULT` as SVGS;
    } else {
      return icon;
    }
  }, [defaultIcon, icon, selected]);
  return (
    <>
      {getSvgByName({
        name: iconName,
        isDarkMode,
        withDark,
        fill: appColors[fill],
        style: [styles.iconStyle, style],
      })}
    </>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    width: normalizeWidth(24),
    height: normalizeWidth(24),
  },
});
