import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { auth } from "../firebase";
import { AntDesign } from "@expo/vector-icons";
const ChatScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        <AntDesign name="logout" size={24} color="black" />;
      },
    });
  }, []);
  const signOut = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <View>
      <Text> ChatScreen </Text>
    </View>
  );
};
export default ChatScreen;
