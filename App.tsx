/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {LogStateUpdates} from 'components/logStateUpdates';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from 'react-native-recoil-persist';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RecoilRoot} from 'recoil';
import {GS} from 'utils/globalStyles';
import {Navigation} from './src/navigation/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <LogStateUpdates />
        <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
          <GestureHandlerRootView style={[GS.flexOne]}>
            <Navigation />
          </GestureHandlerRootView>
        </ReactNativeRecoilPersistGate>
      </RecoilRoot>
    </SafeAreaProvider>
  );
};

export default App;
