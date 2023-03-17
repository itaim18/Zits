import React from "react";
import { View, FlatList, Text } from "react-native";
import { GS } from "utils/globalStyles";
import { AppText } from "./texts";
import { useUserType } from "state/userState";

// type LoginCardProps = {
//   handleSubmitForm: any;
// };
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export const LogsList = () => {
  const userType = useUserType();
  return (
    <View style={[GS.center, GS.flexOne]}>
      <AppText>{userType} logs list</AppText>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View>
    <Text>{title}</Text>
  </View>
);
