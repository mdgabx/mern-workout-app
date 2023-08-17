import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {
  const [workouts, setWorkouts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/workouts')
      .then((res) => {
        const result = res.data

        setWorkouts(result)
      })
      .catch((err) => console.warn(err))
    
  }, [])

  return (
   <div className="flex align-center justify-start flex-col m-8">
      <div className="grid grid-cols-2 p-5">
          <div className="workouts p-5">
            { workouts?.length ? (
                  workouts?.map((workout: any) => (
                    <p key={workout._id}>
                      { workout.title }
                    </p>
                  ))
            ) : (
              <div>
                Loading...
              </div>
            )
           }
          </div>
      </div>
    </div>
  )
}

export default Home