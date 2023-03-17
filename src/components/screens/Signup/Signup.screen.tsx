import React from "react";
import { LoginCard } from "components/basic/loginCard";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useUserType } from "state/userState";
import firebase from "../../../../firebaseConfig";
import { useSetUserIsLoggedIn } from "state/userState";
import * as Notifications from "expo-notifications";
import storage from "@react-native-async-storage/async-storage";
import { useSetAppToken, useAppToken } from "state/appState";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const Signup = () => {
  const token = useAppToken();
  const setAppToken = useSetAppToken();
  React.useEffect(() => {
    const getPermission = async () => {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      console.log(finalStatus);
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
        console.log(finalStatus);
      }
      if (finalStatus !== "granted") {
        alert("Enable push notifications to use the app!");
        await storage.setItem("expopushtoken", "");
        return;
      }
      if (token.length < 1) {
        const expoPushToken = await (
          await Notifications.getDevicePushTokenAsync()
        ).data;
        await storage.setItem("expopushtoken", expoPushToken);

        setAppToken(expoPushToken.toString());
      }

      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    };

    getPermission();
    return () => {
      // cleanup
    };
  }, []);
  const setUserIsLoggedIn = useSetUserIsLoggedIn();
  const userType = useUserType();

  const db = getFirestore(firebase.apps[0]);

  const handleRegister = async ({ user }) => {
    console.log(user);
    if (userType === "volunteer") {
      try {
        const docRef = await addDoc(collection(db, "volunteers"), user);
        console.log("Document written with ID: ", docRef.id);
        setUserIsLoggedIn(true);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else if (userType === "survivor") {
      try {
        const docRef = await addDoc(collection(db, "survivors"), user);
        console.log("Document written with ID: ", docRef.id);
        setUserIsLoggedIn(true);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return <LoginCard handleSubmitForm={handleRegister} />;
};
