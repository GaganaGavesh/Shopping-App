import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native-web";
import { useSelector } from "react-redux";

//we can use nested Text tags so that we can give them different styles colors so on.

const CartScreen = (props) => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <View>
      <View>
        <Text>
          Total: <Text>${cartTotalAmount}</Text>
        </Text>
        <Button title="Order Now" />
      </View>
      <View>
        <Text>Cart Items</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartScreen;
