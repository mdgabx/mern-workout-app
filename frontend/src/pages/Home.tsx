import { useDispatch, useSelector } from "react-redux"
import { getStatus, getWorkouts } from "../components/Workouts/workoutSelectors"
import { useEffect } from 'react'
import { fetchWorkouts } from "../components/Workouts/workoutSlice"
import WorkoutDetails from "../components/workoutDetails"

const Home = () => {
  const workouts = useSelector(getWorkouts)
  const dispatch = useDispatch();
  const status = useSelector(getStatus)

  useEffect(() => {
    dispatch(fetchWorkouts() as any)
  }, [dispatch])


  return (
   <div className="flex align-center justify-start flex-col m-8">
      <div className="grid grid-cols-2 p-5">
          <div className="p-5">
            { status === 'pending' ? (
              <div>
                Loading...
              </div>
            ) : status === 'rejected' ? (
              <div>
                Error...
              </div>
            ): (
              workouts?.map((workout: {
                title: string,
                _id: string,
                load: number,
                reps: number,
              }) => {

                  return (
                    <WorkoutDetails
                      key={workout._id} 
                      title={workout.title}
                      load={workout.load}
                      reps={workout.reps}
                    />
                  )
                }
                
                ) 
            ) }
          </div>
      </div>
    </div>
  )
}

export default Home