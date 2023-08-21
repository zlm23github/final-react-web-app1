import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk, registerThunk, getAllUserThunk } from "../service/auth-thunk";


const initialState = {
    currentUser: null,
    users: [],
}

const authSlice = createSlice({
 name: "auth",
 initialState,
 reducers: {},
 extraReducers: {
    [loginThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
    },

    [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
    },

    [profileThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
    },

    [profileThunk.rejected]: (state, { payload }) => {
        state.currentUser = null;
    },

    [profileThunk.pending]: (state, action) => {
        state.currentUser = null;
    },

    [updateUserThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
    },

    [registerThunk.fulfilled]: (state, { payload }) => {
        state.currentUser = payload;
    },

    [getAllUserThunk.fulfilled]: (state, { payload }) => {
        state.users = payload;
      },
 },
});
export default authSlice.reducer;