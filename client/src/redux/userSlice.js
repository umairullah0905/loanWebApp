// import { createSlice, isAction } from '@reduxjs/toolkit'
// import { PayloadAction } from '@reduxjs/toolkit'

// const initialState = {
//     currentuser: null,
//     loading:false,
//     error:false,

// }

// export const userSlice = createSlice({
//     name:'user',
//     initialState,
//     reducers: {
//        loginStart: (state)=>{
//         state.loading = true;
//        },
//        loginSuccess: (state)=>{
//         state.loading =false;
//         state.currentuser = isAction.payload;
//        },
//        loginFail: (state)=>{
//         state.loading=false;
//         state.error=true;
//        },
//        logout:(state)=>{
//         state.currentuser= null;
//         state.loading=false;
//         state.error=false;    
//        }
//     }
// })

// export const {loginStart,loginSuccess,loginFail,logout} = userSlice.actions

// export default userSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    }
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } =
  userSlice.actions;

export default userSlice.reducer;