import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Workout {
  _id: string,
  title: string,
  load: number,
  reps: number,
  createdAt: string,
}

export interface WorkoutsState {
  workouts: Workout[];
  status: 'idle' | 'pending' | 'fulfilled' | 'rejected';
  error: string;
}

// Define the type for the payload of the deleteWorkout action
type DeleteWorkoutPayload = string; // Assuming your workout ID is a string

// Define the types for the async thunk actions
export const fetchWorkouts = createAsyncThunk<Workout[], void>('workouts/fetchWorkouts', async () => {
  const response = await axios.get('http:/localhost:4000/api/workouts');
  return response.data;
});

export const deleteWorkout = createAsyncThunk<DeleteWorkoutPayload, string>('workouts/deleteWorkout', async (workoutId) => {
  try {
    await axios.delete(`http:/localhost:4000/api/workouts/${workoutId}`);
    return workoutId;
  } catch (err) {
    console.error(err);
    throw err;
  }
});

const workoutSlice = createSlice({
  name: 'workouts',
  initialState: {
    workouts: [],
    status: 'idle',
    error: '',
  } as WorkoutsState, // Typecast the initial state to WorkoutsState
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