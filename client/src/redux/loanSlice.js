import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLoan: null,
  loading: false,
  error: false,
};

export const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentLoan = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    }
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } =
  loanSlice.actions;

export default loanSlice.reducer;