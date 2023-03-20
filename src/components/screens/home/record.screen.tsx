import { AppTextHeader, AppTextSubHeader } from "components/basic/texts";
import { ScreenView } from "components/basic/views";
import { Image, TouchableHighlight, View } from "react-native";
import React from "react";
import { useUser } from "state/userState";
import { useAppNavigation } from "hooks/common.hooks";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import firebase from "../../../../firebaseConfig";
export const RecordScreen = () => {
  const user = useUser();
  const db = getFirestore(firebase.apps[0]);
  const { navigate } = useAppNavigation();
  const createReport = async () => {
    try {
      const docRef = await addDoc(collection(db, "reports"), {
        title: "עזרה",
        name: user.name,
        city: user.city,
        tel: user.tel,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const toHelp = async () => {
    createReport();
    navigate("Help");
  };
  let time = "";
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    time = "בוקר טוב";
  } else if (currentHour >= 12 && currentHour < 15) {
    time = "צהריים טובים";
  } else if (currentHour >= 15 && currentHour < 18) {
    time = "אחר צהריים טובים";
  } else if (currentHour >= 18 && currentHour < 22) {
    time = "ערב טוב";
  } else {
    time = "לילה טוב";
  }

  return (
    <ScreenView>
      <AppTextHeader
        style={{
          marginVertical: 16,
          textAlign: "right",
        }}
      >
        {time} {user.name},
      </AppTextHeader>
      <AppTextSubHeader
        style={{
          width: 320,
          textAlign: "right",
          margin: 0,
          padding: 0,
          left: 12,
          marginBottom: 32,
        }}
      >
        בכדי לעזור לך צריך ללחוץ על הכפתור הגדול ולדבר אל המכשיר
      </AppTextSubHeader>

      <TouchableHighlight
        style={{
          padding: 36,
          paddingVertical: 82,
          backgroundColor: "#426D6B",
          borderRadius: 12,
        }}
        onPress={toHelp}
      >
        <View>
          <AppTextHeader style={{ color: "#eee", fontSize: 36 }}>
            פה לוחצים בכדי לקבל עזרה
          </AppTextHeader>
          <TouchableHighlight
            style={{
              backgroundColor: "#E8E4D8",
              borderRadius: 100,
              padding: 18,
              marginTop: 24,
              marginBottom: 0,
              alignSelf: "center",
            }}
          >
            <Image
              source={require("assets/images/microphone.png")}
              style={{
                width: 48,
                height: 48,
              }}
            />
          </TouchableHighlight>
        </View>
      </TouchableHighlight>
    </ScreenView>
  );
};
