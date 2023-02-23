import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Touchable,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
//When uou use TouchableOpacity it makes all the things inside touchable and
//you can navigate where ever u configured to go or what ever u configured to do
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp onPress={props.onViewDetail} useForeground>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>${props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button
            color={Colors.primary}
            title="View Details"
            onPress={props.onViewDetail}
          />
          <Button
            color={Colors.primary}
            title="To Cart"
            onPress={props.onAddToCart}
          />
        </View>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8, //IOS
    elevation: 5, //Android
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    margin: 20,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
    paddingHorizontal: 20,
  },
  details: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden", //any child in there can't exceed the limits of this View
  },
});

//we need to put style attribute when we get the image from the network, for local images this is not necessary

export default ProductItem;
