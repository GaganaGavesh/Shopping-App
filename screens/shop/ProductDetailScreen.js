import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productId)
  );

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

//extract nav options and set the page title from them
ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
