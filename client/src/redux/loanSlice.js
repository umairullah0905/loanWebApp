import { createSlice } from "@reduxjs/toolkit";
import { TOGGLE_BOOLEAN } from "./actionType";


const initialState = {
  currentLoan: null,
  loading: false,
  error: false,
  pay:false,
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
    },
    payment: (state,action)=>{
      switch(action.type){
        case TOGGLE_BOOLEAN:
          return{
            ...state,
            pay:action.payload
          };
        default:
          return state;
      }
    }
    
  },
});

export const { fetchStart, fetchSuccess, fetchFailure} =
  loanSlice.actions;

export default loanSlice.reducer;