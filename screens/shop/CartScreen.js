import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native-web";
import { useSelector } from "react-redux";

//we can use nested Text tags so that we can give them different styles colors so on.

const CartScreen = (props) => {
  //
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    //map cant be used because items is not an array,it is an object
    //so we have to get the keys and go through each objects
    for (const key in state.cart.items) {
      //since this is an array we can push any item for this
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });

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
