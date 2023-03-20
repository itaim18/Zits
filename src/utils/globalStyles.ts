import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";

const baseScreenWidth = 414; // iPhone 11 - 414x896
const baseScreenHeight = 896;

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const isIos = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";

const androidMenuHeight =
  StatusBar.currentHeight! > 24
    ? 0
    : screenHeight - windowHeight - StatusBar.currentHeight!;

export const normalizeWidth = (width: number) => {
  return PixelRatio.roundToNearestPixel(
    width * (windowWidth / baseScreenWidth)
  );
};

export const normalize = (size: number) => {
  return PixelRatio.roundToNearestPixel(size * (windowWidth / baseScreenWidth));
};

/**
 * const baseScreenWidth = 414; // iPhone 11 - 414x896
const baseScreenHeight = 896;
 */

export const normalizeHeight = (height: number) => {
  return PixelRatio.roundToNearestPixel(
    height * (windowHeight / baseScreenHeight)
  );
};

export const Consts = {
  androidMenuHeight: isAndroid ? androidMenuHeight : 0,
  androidStatusBar: isAndroid ? StatusBar.currentHeight || 0 : 0,
  sheetHandleHeight: 24,
  windowWidth,
  windowHeight,
  screenHeight,
  screenWidth,
  isIos,
  isAndroid,
  platform: Platform.OS,
  hitSlop: { top: 20, right: 20, bottom: 20, left: 20 },
  sliderWidth: normalizeWidth(300),
  knobWidth: normalizeWidth(40),
  initBoxSize: { width: 0, height: 0 },
  maxFontWeight: 9,
  maxFontSize: 100,
  maxShadow: 24,
  emptyStringInput: {
    value: "",
    errorMessage: "",
  },
  bottomTabsHeight: normalizeHeight(110),
};

export const LottieFiles = {
  SPLASH: require("../assets/lottie/splash.json"),
  WELCOME: require("../assets/lottie/welcome.json"),
  IDEA: require("../assets/lottie/idea.json"),
  AVATAR: require("../assets/lottie/avatar-creation.json"),
};

export const GS = StyleSheet.create({
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  screenWidth: {
    width: Consts.screenWidth,
  },
  screenHeight: {
    height: Consts.screenHeight,
  },
  row: {
    flexDirection: "row",
  },
  center: {
    justifyContent: "center",
    // alignItems: 'center',
  },
  displayNone: {
    display: "none",
  },
  displayFlex: {
    display: "flex",
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
  flexThee: {
    flex: 3,
  },
  flexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  noWrap: {
    flexWrap: "nowrap",
  },
  absolute: {
    position: "absolute",
  },
  width32: {
    width: normalizeWidth(32),
  },
  right8: {
    right: normalizeWidth(8),
  },
  left8: {
    left: normalizeWidth(8),
  },
  right16: {
    right: normalizeWidth(16),
  },
  left16: {
    left: normalizeWidth(16),
  },
  leftZero: {
    left: 0,
  },
  rightZero: {
    right: 0,
  },
  opacityZero: {
    opacity: 0,
  },
  opacity05: {
    opacity: 0.5,
  },
  sheetOpacity: {
    opacity: 1,
  },
  // borders
  borderRadius12: {
    borderRadius: 12,
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadius32: {
    borderRadius: 32,
  },
  borderRadiusMax: {
    borderRadius: 999,
  },
  border1: {
    borderWidth: 1,
  },
  // justify/align
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifySpaceBetween: {
    justifyContent: "space-between",
  },
  justifySpaceAround: {
    justifyContent: "space-around",
  },
  justifySpaceEvenly: {
    justifyContent: "space-evenly",
  },
  alignSelfStart: {
    alignSelf: "flex-start",
  },
  alignSelfEnd: {
    alignSelf: "flex-end",
  },
  alignSelfCenter: {
    alignSelf: "center",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignStart: {
    alignItems: "flex-start",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  // paddings
  padding8: { padding: normalizeWidth(8) },
  padding12: { padding: normalizeWidth(12) },
  padding16: { padding: normalizeWidth(16) },
  paddingHorizontal24: { paddingHorizontal: normalizeWidth(24) },
  paddingHorizontal32: { paddingHorizontal: normalizeWidth(32) },
  paddingVertical8: { paddingVertical: normalizeHeight(8) },
  paddingVertical16: { paddingVertical: normalizeHeight(16) },
  paddingHorizontal64: { paddingHorizontal: normalizeWidth(64) },
  paddingLeft8: {
    paddingLeft: normalizeWidth(8),
  },
  paddingLeft16: {
    paddingLeft: normalizeWidth(16),
  },
  paddingTop16: { paddingTop: normalizeHeight(16) },
  paddingBottom8: { paddingBottom: normalizeWidth(8) },
  paddingHorizontal8: {
    paddingHorizontal: normalizeWidth(8),
  },
  paddingHorizontal16: {
    paddingHorizontal: normalizeWidth(16),
  },
  // Margin
  marginVertical8: { marginVertical: normalizeHeight(8) },
  marginVertical16: { marginVertical: normalizeHeight(16) },
  marginTopAuto: {
    marginTop: "auto",
  },
  marginLeftAuto: {
    marginLeft: "auto",
  },
  marginSide8: {
    marginHorizontal: normalizeHeight(8),
  },
  marginLeft8: {
    marginLeft: normalizeHeight(8),
  },
  marginLeft16: {
    marginLeft: normalizeHeight(16),
  },
  marginRight8: {
    marginRight: normalizeHeight(8),
  },
  marginRight16: {
    marginRight: normalizeHeight(16),
  },
  marginBottom2: {
    marginBottom: normalizeHeight(2),
  },
  marginBottom4: {
    marginBottom: normalizeHeight(4),
  },
  marginBottom8: {
    marginBottom: normalizeHeight(8),
  },
  marginBottom16: {
    marginBottom: normalizeHeight(16),
  },
  marginBottom32: {
    marginBottom: normalizeHeight(32),
  },
  marginBottom40: {
    marginBottom: normalizeHeight(40),
  },
  marginTop8: {
    marginTop: normalizeHeight(8),
  },
  marginTop16: {
    marginTop: normalizeHeight(16),
  },
  marginTop24: {
    marginTop: normalizeHeight(24),
  },
  marginTop32: {
    marginTop: normalizeHeight(32),
  },
  marginTop64: {
    marginTop: normalizeHeight(64),
  },
  // texts
  removeFontPadding: {
    includeFontPadding: false,
    padding: 0,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  text16: {
    fontSize: normalizeWidth(16),
  },
  text20: {
    fontSize: normalizeWidth(20),
  },
  text18: {
    fontSize: normalizeWidth(18),
  },
  text22: {
    fontSize: normalizeWidth(22),
  },
  text24: {
    fontSize: normalizeWidth(24),
  },
  text28: {
    fontSize: normalizeWidth(28),
  },
  text32: {
    fontSize: normalizeWidth(32),
  },

  bold: {
    fontWeight: "bold",
  },
  weight500: {
    fontWeight: "500",
  },
  weight400: {
    fontWeight: "400",
  },
  baseShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  hitSlop20: { top: 20, right: 20, bottom: 20, left: 20 },
  // colors
  bgRed: {
    backgroundColor: "red",
  },
  bgBlue: {
    backgroundColor: "blue",
  },
  // components
  dividerStyle: {
    height: 1,
    width: "100%",
    backgroundColor: "#3b3b3b",
  },
  modalContentContainer: {
    flex: 1,
    width: Consts.screenWidth,
    borderTopEndRadius: 36,
    borderTopStartRadius: 36,
    bottom: 0,
    backgroundColor: "white",
  },
  modalSlide: {
    marginTop: 12,
    alignSelf: "center",
    height: 3,
    borderRadius: 999,
    width: normalizeWidth(44),
  },
  editComponent: {
    borderWidth: 3,
    borderColor: "red",
    borderStyle: "dashed",
  },
  width100: { width: 100 },
});

export const Colors = {
  PrimaryColor: "#1F4ED8",
  PrimaryBG: "#F9F7F7",
  SecondaryBG: "#F6F6F6",
  SecondaryColor: "#36a7ec",
  LightText: "#EDF2F5",
  SecondaryLightText: "#ADB5BD",
  DarkText: "#040404",
  White: "#FFF",
  Black: "#000",
  LoaderColor: "#efefee",
  BrushColor: "#fff",
  EmptyScreen: "#E5E5E5",
  Error: "red",
};

export enum Themes {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

export const colorsLightTheme = {
  [Themes.DARK]: {
    ...Colors,
    PrimaryBG: "#FFF",
  },
  [Themes.LIGHT]: {
    ...Colors,
    PrimaryBG: "#FFF",
  },
};

export const colorsDarkTheme = {
  [Themes.DARK]: {
    ...Colors,
    PrimaryBG: "#000",
  },
  [Themes.LIGHT]: {
    ...Colors,
    White: "#000",
    Black: "#FFF",
    PrimaryColor: "#60A5FA",
    SecondaryLightText: "#524A42",
    PrimaryBG: "#18181A",
    SecondaryBG: "#292525",
    LightText: "#040404",
    DarkText: "#EDF2F5",
    EmptyScreen: "#1A1A1A",
  },
};
