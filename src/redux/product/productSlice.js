<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    deleteStatus: false,
  },
  reducers: {
    setDeleted: (state, action) => {
      state.deleteStatus = action.payload;
    },
  },
});
export const { setDeleted } = productSlice.actions;
export default productSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    deleteStatus: false,
  },
  reducers: {
    setDeleted: (state, action) => {
      state.deleteStatus = action.payload;
    },
  },
});
export const { setDeleted } = productSlice.actions;
export default productSlice.reducer;
>>>>>>> dff7259d9c648c2ed6ef28607dacf6d55f73aca2
