import { combineReducers, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cartReducer from "./store/reducers/cart";
import productsReducer from "./store/reducers/products";
import ShopNavigator from "./navigation/ShopNavigator";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, composeWithDevTools);

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
