import { useDispatch, useSelector } from "react-redux"
import { getStatus, getWorkouts } from "../components/Workouts/workoutSelectors"
import { useEffect } from 'react'
import { fetchWorkouts } from "../components/Workouts/workoutSlice"
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
  const workouts = useSelector(getWorkouts)
  const dispatch = useDispatch();
  const status = useSelector(getStatus)

  useEffect(() => {
    dispatch(fetchWorkouts() as any)
  }, [dispatch])


  return (
   <div className="w-full flex items-center m-8">
      <div className="w-full flex flex-row items-stretch justify-center">
          <div className="w-2/3">
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
                createdAt: string,
              }) => {

                  return (
                    <WorkoutDetails
                      id={workout._id}
                      key={workout._id} 
                      title={workout.title}
                      load={workout.load}
                      reps={workout.reps}
                      createdAt={workout.createdAt}

                    />
                  )
                }
                
                ) 
            ) }
          </div>
          <WorkoutForm />
      </div>
    </div>
  )
}

export default Home