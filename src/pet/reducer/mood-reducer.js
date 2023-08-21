import { createSlice } from "@reduxjs/toolkit";
import { createMoodThunk, deleteMoodThunk, findMoodThunk, updateMoodThunk } from "../service/mood-thunk";


const initialState = {
   mood: [],
   loading: false
}


const currentMood = {
    "topic": "Happy",
};
   
const templateMood = {
    ...currentMood,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}
   

const moodSlice = createSlice({
 name: 'mood',
 initialState,
 extraReducers: {
  [updateMoodThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const moodNdx = state.mood.findIndex((m) => m._id === payload._id)
    state.mood[moodNdx] = { ...state.mood[moodNdx], ...payload }
  },

  [createMoodThunk.fulfilled]:
      (state, { payload }) => {
        state.loading = false
        state.mood.push(payload)
    },

  [deleteMoodThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.mood = state.mood.filter(m => m._id !== payload)
    },

  [findMoodThunk.pending]:
    (state) => {
        state.loading = true
        state.mood = [] },
  [findMoodThunk.fulfilled]:
    (state, { payload }) => {
        state.loading = false
        state.mood = payload },
  [findMoodThunk.rejected]:
    (state, action) => {
        state.loading = false
        state.error = action.error
  }
},

 reducers: {
    deleteMood(state, action) {
      const index = state.mood
        .findIndex(mood =>mood._id === action.payload);
      state.mood.splice(index, 1);
    },

    createMood(state, action) {
      state.mood.unshift({
        ...action.payload,
        ...templateMood,
        _id: (new Date()).getTime(),
      })
    }
  }
 
});

export const {createMood, deleteMood} = moodSlice.actions;
export default moodSlice.reducer;