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
        <Text style={StyleSheet.quantity}>{props.quantity}</Text>{" "}
        <Text style={StyleSheet.mainText}>{props.title}</Text>
      </Text>
      <View style={StyleSheet.itemData}>
        <Text style={StyleSheet.mainText}>{props.amount.toFixed(2)}</Text>
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

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    color: "#888",
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
  },
  amount: {},
  deleteButton: {
    marginLeft: 20,
  },
});
