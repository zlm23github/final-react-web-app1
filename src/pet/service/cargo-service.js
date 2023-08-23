import axios from 'axios';


// const SERVER_API_URL = process.env.REACT_APP_API_BASE;


const SERVER_API_URL = "https://fianl-project.onrender.com/api";
const CARGO_URL = `${SERVER_API_URL}/cargo`;


// const CARGO_API = "http://localhost:8080/api";
// const CARGO_URL = `${CARGO_API}/cargo`;

export const findCargoByName = async (name) => {
    const response = await axios.get(`${CARGO_URL}/${name}`, name)
    return response
}

export const findCargoById = async (cid) => {
    const response = await axios.get(`${CARGO_URL}/${cid}`, cid)

    return response
}

export const createCargo = async (cargo) => {
    const response = await axios.post(CARGO_URL, cargo)
    return response.data;
}

export const deleteCargo = async (cid) => {
    const response = await axios.delete(`${CARGO_URL}/${cid}`)
    return response.data
}

export const findCargo = async () => {
    const response = await axios.get(CARGO_URL)
    return response
}

export const updateCargo = async (cargo) => {
    await axios.put(`${CARGO_URL}/${cargo._id}`, cargo)
    return cargo
}