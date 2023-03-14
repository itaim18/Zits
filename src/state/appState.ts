import {Appearance} from 'react-native';
import ReactNativeRecoilPersist from 'react-native-recoil-persist';
import {
  atom,
  AtomEffect,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {colorsDarkTheme, colorsLightTheme, Themes} from 'utils/globalStyles';

const persistAtom = ReactNativeRecoilPersist.persistAtom;

const colorScheme = Appearance.getColorScheme();

// showSplashScreen
export const showSplashScreen = atom({
  key: 'showSplashScreen',
  default: true as boolean,
});

export const useAppShowSplashScreen = () => useRecoilValue(showSplashScreen);
export const useSetAppshowSplashScreen = () =>
  useSetRecoilState(showSplashScreen);

// isInitializingApp
export const isInitializingApp = atom({
  key: 'isInitializingApp',
  default: true as boolean,
});

export const useAppIsInitializing = () => useRecoilValue(isInitializingApp);
export const useSetAppIsInitializing = () =>
  useSetRecoilState(isInitializingApp);

// isDarkMode
export const isDarkMode = atom({
  key: 'isDarkMode',
  default: (colorScheme === 'dark') as boolean,
  effects_UNSTABLE: [persistAtom as AtomEffect<boolean>],
});

export const useAppIsDarkMode = () => useRecoilValue(isDarkMode);
export const useSetAppIsDarkMode = () => useSetRecoilState(isDarkMode);

// themeName
export const themeName = atom({
  key: 'themeName',
  default: Themes.LIGHT as Themes,
});

export const useAppThemeName = () => useRecoilValue(themeName);
export const useSetAppThemeName = () => useSetRecoilState(themeName);

// appColors
const appColors = selector({
  key: 'appColors',
  get: ({get}) => {
    const theme = get(themeName);
    const isDark = get(isDarkMode);

    return isDark ? colorsDarkTheme[theme] : colorsLightTheme[theme];
  },
});

export const useAppThemeColors = () => useRecoilValue(appColors);
