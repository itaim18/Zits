// import { StatusBar } from 'expo-status-bar';
import { LogStateUpdates } from "components/logStateUpdates";
import { Navigation } from "navigation/navigation";
import React from "react";
import ReactNativeRecoilPersist, {
  ReactNativeRecoilPersistGate,
} from "react-native-recoil-persist";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import registerNNPushToken from "native-notify";
import { LogBox } from "react-native";
const App = () => {
  LogBox.ignoreAllLogs();
  registerNNPushToken(6787, "srGHwecJjfz76AXrYM2o61");
  return (
    <SafeAreaProvider style={{ direction: "rtl" }}>
      <RecoilRoot>
        <LogStateUpdates />
        <ReactNativeRecoilPersistGate store={ReactNativeRecoilPersist}>
          <Navigation />
        </ReactNativeRecoilPersistGate>
      </RecoilRoot>
    </SafeAreaProvider>
  );
};

export default App;
