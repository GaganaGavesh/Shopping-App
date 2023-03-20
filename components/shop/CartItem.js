import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native-web";
import { Ionicons } from "@expo/vector-icons";

const CartItem = (props) => {
  return (
    <View style={StyleSheet.cartItem}>
      <Text style={StyleSheet.itemData}>
        <Text style={StyleSheet.quantity}>QTY</Text>{" "}
        <Text style={StyleSheet.title}>TITLE</Text>
      </Text>
      <View style={StyleSheet.itemData}>
        <Text style={StyleSheet.amount}>$AMT</Text>
        <TouchableOpacity
          onPress={props.onRemove}
          style={StyleSheet.deleteButton}
        >
          <Ionicons
            name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
            size={23}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {},
  quantity: {},
  title: {},
  amount: {},
  deleteButton: {
    marginLeft: 20,
  },
});
