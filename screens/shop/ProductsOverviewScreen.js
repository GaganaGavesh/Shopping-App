import React from "react";
import { FlatList, Platform, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButton, Item } from "react-navigation-header-buttons";

import ProductItem from "../../components/shop/ProductItem";
import HeaderButton from "../../components/UI/HeaderButton";
import * as cartActions from "../../store/actions/cart"; //all the exports added in to cartActions object

const ProductOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  console.log("props.navigation", props.navigation);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate({
              routeName: "productDetail",
              productId: itemData.item.id,
              productTitle: itemData.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}
        />
      )}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
  //Here is the place that we put the navigation configurations to the screen
  //we can put header titles and icons so on here
  headerRight: (
    <HeaderButton HeaderButtonComponent={HeaderButton}>
      <Item
        title="Cart"
        iconName={Platform === "android" ? "md-cart" : "ios-cart"}
        onPress={() => {}}
      />
    </HeaderButton>
  ),
};

export default ProductOverviewScreen;
