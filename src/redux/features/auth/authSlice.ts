import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


//user type
export type TUser = {
    userId: string;
    role: string;
    iat: number;
    exp: number;
}

//type for initial state
type TAuthState = {
    user: null | object;
    token: null | string;
}

const initialState: TAuthState = {
    user: null,
    token: null,
}

//the main slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
        }
    }

})
//exports action


export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const useCurrentToken = ((state: RootState) => state.auth.token)
export const useCurrentUser = ((state: RootState) => state.auth.user)