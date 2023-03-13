import {GetLottie} from 'components/basic/lottie';
import {AppText} from 'components/basic/texts';
import {ScreenView} from 'components/basic/views';
import React from 'react';
import {GS, LottieFiles, normalizeWidth} from 'utils/globalStyles';
import {Strings} from 'utils/strings';
import {LoginButtons} from './loginButtons';

export const Login = () => {
  return (
    <ScreenView style={[GS.alignCenter, GS.center, GS.paddingHorizontal32]}>
      <AppText style={[GS.bold, GS.text32, GS.marginTop32]}>
        {Strings.screens.login.letsGetYouIn}
      </AppText>
      <LoginButtons />
      <GetLottie
        wrapStyle={[GS.justifyStart, GS.marginTop64]}
        source={LottieFiles.WELCOME}
        height={normalizeWidth(300)}
        autoPlay
      />
    </ScreenView>
  );
};
