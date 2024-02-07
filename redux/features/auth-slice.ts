import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  acessToken: string;
  refreshToken: string;
  isAuth: boolean;
  user: any;
}

const initialState: AuthState = {
  acessToken: "",
  refreshToken: "",
  isAuth: false,
  user: null,
};

export const auth = createSlice({
  name: "auth",
  initialState: initialState, // can use like initialState if have the same name in ts
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<any>) => {
      console.log("action", action);
      state.acessToken = action.payload.access;
      state.refreshToken = action.payload.refresh;
    },
    authSuccess: (state, action: PayloadAction<any>) => {
      state.isAuth = true;
      state.user = action.payload;
    },
  },
});

export const { logIn, logOut, authSuccess } = auth.actions;
export default auth.reducer;

// example

// Type for our state
// export interface AuthState {
//     authState: boolean;
//   }

//   // Initial state
//   const initialState: AuthState = {
//     authState: false,
//   };

//   // Actual Slice
//   export const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//       // Action to set the authentication status
//       setAuthState(state, action) {
//         state.authState = action.payload;
//       },
//     },

//     // Special reducer for hydrating the state. Special case for next-redux-wrapper
//     extraReducers: {
//       [HYDRATE]: (state, action) => {
//         return {
//           ...state,
//           ...action.payload.auth,
//         };
//       },
//     },
//   });
