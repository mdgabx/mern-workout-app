import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  workouts: [],
  status: 'idle',
  error: '',
};

export const fetchWorkouts = createAsyncThunk('workouts/fetchWorkouts', async () => {
  const response = await axios.get('http://localhost:4000/api/workouts');
  return response.data;
});

export const deleteWorkout = createAsyncThunk('workouts/deleteWorkout', async (workoutId) => {
  try {
    await axios.delete(`http://localhost:4000/api/workouts/${workoutId}`);
    return workoutId;
  } catch (err) {
    console.error(err);
  }
});

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkouts.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.workouts = action.payload;
      })
      .addCase(fetchWorkouts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchWorkouts.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error?.message ?? '';
      })
      .addCase(deleteWorkout.fulfilled, (state, action) => {
        // Use the 'workoutId' from the action payload to filter the workouts
        state.workouts = state.workouts.filter((workout) => workout._id !== action.payload);
      });
  },
});

export default workoutSlice.reducer;
