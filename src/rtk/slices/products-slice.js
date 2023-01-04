import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";




export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [{ id: 1, title: "iPhone14 pro max" }],
  name: "productsSlice",
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(fetchProducts.pending, (state, action) => {
            // show loader here
    // });
    // builder.addCase(fetchProducts.rejected, (state, action) => {
            // show loader here
    // });
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
