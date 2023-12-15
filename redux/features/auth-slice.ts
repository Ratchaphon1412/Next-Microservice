import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}

const initialState = {
    value: {
        isAuth: false,
        username: "",
        uid: "",
        isModerator: false,
    } // as AuthState
} as InitialState;




export const auth = createSlice({
    name: "auth",
    initialState: initialState, // can use like initialState if have the same name in ts
    reducers: {
        logOut: () => {
            return initialState
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: "sadasdasda",
                    isModerator: false,
                }
            }
        },

    }
})


export const { logIn, logOut } = auth.actions
export default auth.reducer

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector













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
  