import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./mood-service";


export const findMoodThunk = createAsyncThunk(
    'mood/findMood',
    async () => {
        const mood = await service.findMood()
        return mood.data
    }
);

export const deleteMoodThunk = createAsyncThunk(
    'mood/deleteMood',
    async (moodId) => {
      await service.deleteMood(moodId)
      return moodId
    }
)

export const createMoodThunk = createAsyncThunk(
    'mood/createMood',
    async (mood) => {
      const newMood = await service.createMood(mood)
      return newMood
  })

export const updateMoodThunk = createAsyncThunk(
    'mood/updateMood',
    async (mood) =>
      await service.updateMood(mood)
)

  
  