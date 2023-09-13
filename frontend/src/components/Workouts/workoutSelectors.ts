import { RootState } from '../../app/store'

export const getStatus = (state: RootState) => { 
    return state.workout.status
}
export const getWorkouts = (state: RootState) => { 
    return state.workout.workouts
}