// likedShirtsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const likedShirtsSlice = createSlice({
  name: "likedShirts",
  initialState: {
    likedShirts: [],
  },
  reducers: {
    addLikedShirt: (state, action) => {
      state.likedShirts.push(action.payload);
    },
    removeLikedShirt: (state, action) => {
      state.likedShirts = state.likedShirts.filter(
        (shirtId) => shirtId !== action.payload
      );
    },
  },
});

export const { addLikedShirt, removeLikedShirt } = likedShirtsSlice.actions;
export default likedShirtsSlice.reducer;
