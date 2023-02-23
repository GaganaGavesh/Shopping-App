import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";

const productNavigator = createStackNavigator(
  {
    //we should map our screen to an object here
    //All the navigation pages should be specified here, even we do the navigation from a different page
    productOverview: ProductOverviewScreen,
    productDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default createAppContainer(productNavigator);
