import axios from "axios";

const SERVER_API_URL = "http://localhost:8080/api";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;

const USERS_URL = `${SERVER_API_URL}/users`;


const api = axios.create({ withCredentials: true });


export const getAllUser = async () => {
    console.log( "in service");
    console.log(USERS_URL);
    const response = await api.get(USERS_URL);
    return response.data;
}

export const getUser = async (uid) => {
    
    console.log("i am in service");
    const response = await api.get(`${USERS_URL}/${uid}`);
    console.log("i am out service");
    console.log(response);
    return response.data;
}

export const login = async ({ username, password }) => {
    const response = await api.post(`${USERS_URL}/login`, { username, password });
    const user = response.data;
    return user;
};

export const logout = async () => {
    const response = await api.post(`${USERS_URL}/logout`);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${USERS_URL}/profile`);
    return response;
};

export const updateUser = async (user) => {
    const response = await api.put(`${USERS_URL}/${user._id}`, user);
    return response.data;
};


export const register = async ({username, password}) => {
    const response = await api.post(`${USERS_URL}/register`, {username, password});
    return response.data;
};