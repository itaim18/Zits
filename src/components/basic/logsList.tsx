import React from "react";
import { View, FlatList, Linking, TouchableOpacity } from "react-native";
import { GS } from "utils/globalStyles";
import { AppText, AppTextHeader, AppTextSubHeader } from "./texts";
import { AppButton } from "./buttons";
import { List } from "react-native-paper";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebase from "../../../firebaseConfig";

export const LogsList = () => {
  const [reportsData, setReportsData] = React.useState([]);
  const db = getFirestore(firebase.apps[0]);
  React.useEffect(() => {
    const fetchReports = async () => {
      const docRef = collection(db, "reports");
      const docSnap = await getDocs(docRef);

      docSnap.forEach((d) => {
        setReportsData((prevState) => [...prevState, d.data()]);
      });
      console.log(reportsData);
    };
    fetchReports();
    return () => {
      setReportsData([]);
    };
  }, []);

  return (
    <View style={[GS.center, GS.flexOne]}>
      <FlatList
        data={reportsData}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
type ItemProps = { item: any };

const Item = ({ item }: ItemProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => {
    setExpanded((prevState) => !prevState);
  };
  const handleCall = () => {
    Linking.openURL(`tel:${item?.tel}`);
  };
  function getFirstWord(str) {
    const words = str.trim().split(" ");
    return words[0];
  }
  return (
    <View
      style={{
        backgroundColor: "#fff",
        width: 340,
        marginVertical: 16,
        paddingVertical: 16,
        borderRadius: 8,
        shadowColor: "black",
        marginHorizontal: 8,
        shadowOpacity: 1,
        shadowRadius: 24,
        alignItems: "center",
      }}
    >
      <AppTextSubHeader
        style={{
          width: 360,
          alignSelf: "flex-end",
          textAlign: "right",
          fontSize: 20,
          marginHorizontal: 4,
        }}
      >
        {item.name} יצר Zits בנושא {item.title}
      </AppTextSubHeader>
      <List.Accordion
        title={`רוצה לדעת עוד על ${getFirstWord(item.name)}`}
        expanded={expanded}
        onPress={handlePress}
        style={{
          width: 280,
          direction: "rtl",
          flexDirection: "column",
          textAlign: "right",
          color: "black",
        }}
      >
        <AppTextSubHeader style={{ fontSize: 18, textAlign: "right" }}>
          הוא צריך עזרה בקניות
        </AppTextSubHeader>
        <AppText style={{ textAlign: "right" }}>עיר:{item.city}</AppText>
      </List.Accordion>

      <AppButton
        bgColor="#426D6B"
        text="אני אקח את ה Zits"
        onPress={handleCall}
      />
      <TouchableOpacity>
        <AppTextHeader style={{ fontWeight: "800", fontSize: 24, margin: 24 }}>
          כרגע אני לא פנוי
        </AppTextHeader>
      </TouchableOpacity>
    </View>
  );
};
