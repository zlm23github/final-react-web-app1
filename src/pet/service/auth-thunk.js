import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";


export const getAllUserThunk = createAsyncThunk(
    "user/getAllUser",
    async () => {
        const response = await authService.getAllUser();
        return response;
    }
)

export const findUserByIdThunk = createAsyncThunk(
    "user/findUserById",
    async (userId) => {
        const response = await authService.getUser(userId);
        
        return response;
    }
)

export const loginThunk = createAsyncThunk(
 "user/login", async (credentials) => {
   const user = await authService.login(credentials);
   return user;
 }
);

export const getThunk = createAsyncThunk(
    "auth/getUser", async (user) => {
        const response = await authService.getUser(user);
        return response;
    }
)

export const profileThunk = createAsyncThunk(
    "auth/profile", async () => {
    const response = await authService.profile();
    return response.data;
});

export const logoutThunk = createAsyncThunk(
    "auth/logout", async () => {
    return await authService.logout();
});

export const updateUserThunk = createAsyncThunk(
    "user/updateUser", async (user) => {
        await authService.updateUser(user);
        return user;
});

export const registerThunk = createAsyncThunk(
    "auth/register", async(user) => {
        const newUser = await authService.register(user);
        return newUser;
    }
)


   