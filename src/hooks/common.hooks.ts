import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {BackHandler, Keyboard, TextInput} from 'react-native';
import {wait} from 'utils/helpers';
import {AppTransparentModalRouteProp, RootNavigationProps} from 'utils/types';

export const useAppNavigation = (): RootNavigationProps =>
  useNavigation<RootNavigationProps>();

export const useAppRoute = () => useRoute<AppTransparentModalRouteProp>();

// eslint-disable-next-line react-hooks/exhaustive-deps
export const useMount = (func: any) => useEffect(() => func(), []);

export const useIsKeyboardShown = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};

export const useEffectPartialDeps = (
  effect: () => void,
  deps: unknown[],
): void => {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export const useAutoFocus = () => {
  const [inputRef, setInputRef] = useState<TextInput>();

  useEffect(() => {
    if (inputRef) {
      (async () => {
        await wait(0);
        !inputRef?.isFocused() && inputRef.focus();
      })();
    }
  }, [inputRef]);

  return {inputRef, setInputRef};
};

/*have callback function return true to stop back navigation, false to enable it */
export const useBackButton = (onBack: () => boolean, deps?: unknown[]) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBack);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onBack, ...(deps || [])]);
};

export const useFreeze = () => {
  const [freeze, setFreeze] = useState(true);
  useFocusEffect(
    useCallback(() => {
      setFreeze(false);

      return () => setFreeze(true);
    }, []),
  );

  return freeze;
};
