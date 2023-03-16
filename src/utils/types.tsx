// Global State
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ReactNode } from "react";
import { FlexAlignType, TextStyle, ViewStyle } from "react-native";
import {
  ANT_ICON_NAMES,
  FANISTO_ICON_NAMES,
  FEATHER_ICON_NAMES,
  FONTAWESOME_ICON_NAMES,
  FOUNDATION_ICON_NAMES,
  ICON_TYPES,
  IONICONS_ICON_NAMES,
} from "./enums";
import { Colors } from "./globalStyles";

export type AppColorsType = {
  [key in ColorKeys]: string;
};

export type ColorKeys = keyof typeof Colors;

// Apps State
export type Platform = "ios" | "android";

export interface ScreenStyle extends ViewStyle {
  backgroundColor?: string;
}

export interface TextComponentStyle extends TextStyle {
  color: string;
  fontSize: number;
  iconName?: ICON_NAMES;
  iconType?: ICON_TYPES;
}

// Navigation

export type RootNavigationProps = NavigationProp<RootStackParamList>;

type TransparentModals = "ImagePicker" | "UserProfile";

export type AppTransparentModalRouteProp = RouteProp<
  RootStackParamList,
  "AppTransparentModal"
>;

export type RootStackParamList = {
  Settings: undefined;
  Home: undefined;
  Mitnadvim: undefined;
  Login: undefined;
  LoginChoose: undefined;
  Signup: undefined;
  ["AppTransparentModal"]: {
    type: TransparentModals;
    withDelete?: boolean;
    photoNumber?: number;
  };
};

export type PreviewNavigationProps = {
  screen?: string;
  params: PreviewScreenParams;
};

export type ICON_NAMES =
  | ANT_ICON_NAMES
  | FEATHER_ICON_NAMES
  | FONTAWESOME_ICON_NAMES
  | FOUNDATION_ICON_NAMES
  | FANISTO_ICON_NAMES
  | IONICONS_ICON_NAMES;

type PreviewScreenParams = {
  screenIndex: number;
};

// Global

export type CommonComponent = {
  onPress?: () => void;
  children?: ReactNode | ReactNode[];
};

// Helpers types

export type AnimatedGHContext = {
  offsetX: number;
};

export type JustifyContentType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | undefined;

export type AlignItems = FlexAlignType;

export type FlexDirection = "column" | "row";

// Firebase
export type FirebaseUser = Object; // FirebaseAuthTypes.User;

export type DBCollection = "users" | "chats";
export type SubCollection = "messages";

// User

export type User = {
  name?: string;
  photos: string[];
  uid?: string;
  isOnline: boolean;
  email?: string;
  // fcmToken: string | null;
  creationTime?: string;
  lastSignInTime?: string;
};
