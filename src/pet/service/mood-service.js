import axios from 'axios';

// const SERVER_API_URL = process.env.REACT_APP_API_BASE;

const SERVER_API_URL = "https://fianl-project.onrender.com/api";
const MOOD_URL = `${SERVER_API_URL}/mood`;

// const MOOD_API = "http://localhost:8080/api";
// const MOOD_URL = `${MOOD_API}/mood`;

export const createMood = async (mood) => {
    const response = await axios.post(MOOD_URL, mood)
    return response.data;
    }
   
export const findMood = async () => {
    const response = await axios.get(MOOD_URL);
    return response;
    }
export const deleteMood = async (mid) => {
    const response = await axios.delete(`${MOOD_URL}/${mid}`)
    return response.data
    }
  
export const updateMood = async (mood) => {
    const response = await axios
        .put(`${MOOD_URL}/${mood._id}`, mood);
    return mood;
    }
      

   