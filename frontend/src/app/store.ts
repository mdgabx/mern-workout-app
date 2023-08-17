import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../components/Workouts/workoutSlice'

const store = configureStore({
    reducer: {
        workout: workoutReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;