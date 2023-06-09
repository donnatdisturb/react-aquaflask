import {
  createStore,
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { productsReducer, 
        productDetailsReducer,
        newProductReducer,
        productReducer,
} from './reducers/productReducers'
import {
          authReducer,
          userReducer,
          forgotPasswordReducer,
          allUsersReducer,
          userDetailsReducer,
        } from "./reducers/userReducers";
import {
          newOrderReducer,
          myOrdersReducer,
          orderDetailsReducer,
          allOrdersReducer,
          orderReducer,
        } from "./reducers/orderReducers";
import { cartReducer } from "./reducers/cartReducers";
import { salesPerMonthReducer, salesPerYearReducer, productSalesReducer } from './reducers/chartReducers';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
  userDetails: userDetailsReducer,
  newProduct: newProductReducer,
  product: productReducer,
  allUsers: allUsersReducer,
  newProduct: newProductReducer,
  product: productReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  salesPerMonth: salesPerMonthReducer,
  salesPerYear: salesPerYearReducer,
  productSales: productSalesReducer,

});


let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],

    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);


export default store;
