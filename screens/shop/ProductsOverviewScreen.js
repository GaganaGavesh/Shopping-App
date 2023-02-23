import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";

import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  console.log("props.navigation", props.navigation);
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
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductOverviewScreen;
