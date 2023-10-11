import { configureStore } from '@reduxjs/toolkit'
import workoutReducer from '../components/Workouts/workoutSlice'
import authReducer from '../components/Authentication/authSlice'

const store = configureStore({
    reducer: {
        workout: workoutReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export default store;