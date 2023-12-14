import { configureStore } from "@reduxjs/toolkit";
import ShirtReducer from "./Features/LikedClothes";
import CartReducer from "./Features/Cartslice";

const rootReducer = {
  likedShirts: ShirtReducer,
  cart: CartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
