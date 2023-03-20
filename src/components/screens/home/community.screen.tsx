import { View, FlatList, Text } from "react-native";

import {
  AppTextHeader,
  AppTextSubHeader,
  AppText,
} from "components/basic/texts";
import React from "react";

import { ScrollView } from "react-native";
import {
  Simcard,
  BagHappy,
  Cake,
  Lovely,
  TableLamp,
  WristClock,
} from "iconsax-react-native";
import { SafeAreaView } from "react-native";

const DATA = [
  {
    id: "1",
    title: "למפתחים",
    tag: Simcard,
    amount: 35,
  },
  {
    id: "2",
    title: "למבשלים",
    tag: BagHappy,
    amount: 42,
  },
  {
    id: "3",
    title: "חוגגים",
    tag: Cake,
    amount: 60,
  },
  {
    id: "4",
    title: "מקשיבים",
    tag: Lovely,
    amount: 32,
  },
  {
    id: "5",
    title: "מתקנים",
    tag: TableLamp,
    amount: 18,
  },
  {
    id: "5",
    title: "קובעים",
    tag: WristClock,
    amount: 14,
  },
];
export const Community = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fcf7ee" }}>
      <ScrollView>
        <AppTextHeader
          style={{ textAlign: "right", marginRight: 24, marginVertical: 24 }}
        >
          {" "}
          Zits בקהילה
        </AppTextHeader>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            margin: 4,
            width: 420,
          }}
        >
          {DATA.map((item) => {
            const Tag = item.tag;
            return (
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 8,
                  margin: 16,
                  width: 160,

                  borderRadius: 12,
                }}
              >
                <AppTextSubHeader
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  Zits {item.title}
                </AppTextSubHeader>
                <View
                  style={{
                    width: 66,
                    height: 66,
                    borderRadius: 50,
                    backgroundColor: "#F7D8D4",
                    alignSelf: "center",
                  }}
                ></View>
                <Tag
                  color="black"
                  size={79}
                  style={{ position: "relative", left: 0, bottom: 48 }}
                />
                <AppText>{item.amount} חברים בקהילה זו </AppText>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
