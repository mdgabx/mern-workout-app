import { RootState } from '../../app/store'

export const getStatus = (state: RootState) => state.workout.status
export const getWorkouts = (state: RootState) => state.workout.workouts