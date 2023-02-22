import { createStackNavigator, createAppContainer } from "react-navigation";
import { Platform } from "react-native";

import ProductOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";

const productNavigator = createStackNavigator(
  {
    productOverview: ProductOverviewScreen,
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
