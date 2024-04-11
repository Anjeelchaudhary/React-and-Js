import { createSlice } from '@reduxjs/toolkit'

const initialState = { status: false, userData: null, }

const authSlice = createSlice({
    name: "auth",
    initialState,
    //reducer ek object ho 
    reducers: {
        login: (state, action) => {
            state.status = false;

            //action.playload karho yaar userData kaho ekke baat ho 
            //but action.playload.usderData karnu
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions; //actions hukan export karna

export default authSlice.reducer; //authSlice manik reducer hukan default lai k export karna