import APPLE_DARK from 'assets/svg/apple-dark.svg';
import APPLE from 'assets/svg/apple.svg';
import BACK from 'assets/svg/back.svg';
import CHAT_DARK from 'assets/svg/chat-dark.svg';
import CHAT_SELECTED from 'assets/svg/chat-selected.svg';
import CHAT from 'assets/svg/chat.svg';
import DISCOVERY_DARK from 'assets/svg/discovery-dark.svg';
import DISCOVERY_SELECTED from 'assets/svg/discovery-selected.svg';
import DISCOVERY from 'assets/svg/discovery.svg';
import FACEBOOK from 'assets/svg/fbicon.svg';
import GOOGLE from 'assets/svg/google.svg';
import HOME from 'assets/svg/home.svg';
import PROFILE_DARK from 'assets/svg/profile-dark.svg';
import PROFILE_SELECTED from 'assets/svg/profile-selected.svg';
import PROFILE from 'assets/svg/profile.svg';
import X from 'assets/svg/x.svg';
import {createElement, ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import ARROW_LEFT_DARK from 'assets/svg/arrow-left-dark.svg';
import ARROW_LEFT from 'assets/svg/arrow-left.svg';

import ARROW_RIGHT_DARK from 'assets/svg/arrow-right-dark.svg';
import ARROW_RIGHT from 'assets/svg/arrow-right.svg';

import LOGIN_PIC from 'assets/svg/loginFrame.svg';
import LOGOUT from 'assets/svg/logout.svg';
import LOVE from 'assets/svg/love.svg';
import PLUS from 'assets/svg/plus.svg';
import REMOVE from 'assets/svg/remove.svg';

import USER_DARK from 'assets/svg/user-dark.svg';
import USER_DEFAULT from 'assets/svg/user-default.svg';
import USER_SELECTED from 'assets/svg/user-selected.svg';
import USER from 'assets/svg/user.svg';

import BIRTHDAY_DARK from 'assets/svg/birthday-dark.svg';
import BIRTHDAY_DEFAULT from 'assets/svg/birthday-default.svg';
import BIRTHDAY_SELECTED from 'assets/svg/birthday-selected.svg';
import BIRTHDAY from 'assets/svg/birthday.svg';

export type SVGS = keyof typeof SVGS_EXPORT;

export const SVGS_EXPORT = {
  HOME,
  GOOGLE,
  FACEBOOK,
  APPLE,
  APPLE_DARK,
  REMOVE,
  LOVE,
  BACK,
  PLUS,
  X,
  PROFILE,
  PROFILE_DARK,
  PROFILE_SELECTED,
  DISCOVERY_SELECTED,
  DISCOVERY,
  DISCOVERY_DARK,
  CHAT_SELECTED,
  CHAT,
  CHAT_DARK,
  LOGOUT,
  LOGIN_PIC,
  ARROW_LEFT,
  ARROW_LEFT_DARK,
  USER_SELECTED,
  USER,
  USER_DEFAULT,
  USER_DARK,
  BIRTHDAY_SELECTED,
  BIRTHDAY,
  BIRTHDAY_DARK,
  BIRTHDAY_DEFAULT,
  ARROW_RIGHT,
  ARROW_RIGHT_DARK,
};

export interface GetSvgArgs {
  name: SVGS;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  style?: StyleProp<ViewStyle>;
  withDark?: boolean;
  isDarkMode?: boolean;
}

export const getSvgByName = ({
  name,
  withDark = true,
  fill,
  style = {},
  isDarkMode,
}: GetSvgArgs): ReactNode => {
  const icon = SVGS_EXPORT[name];
  if (icon) {
    const darkIcon = SVGS_EXPORT[`${name}_DARK` as SVGS];
    return createElement(withDark && isDarkMode ? darkIcon || icon : icon, {
      style,
      fill,
    });
  }

  return null;
};
