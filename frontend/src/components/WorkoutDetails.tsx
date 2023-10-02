import { useDispatch } from "react-redux"
import { formatDistanceToNow } from "date-fns"
import { deleteWorkout, fetchWorkouts } from "./Workouts/workoutSlice"
import { FaRegTrashAlt } from "react-icons/fa";

const WorkoutDetails:React.FC<{ 
    id: string,
    title: string, 
    reps: number, 
    load: number,
    createdAt: string,
}> = ({
    id,
    title, 
    reps, 
    load,
    createdAt,
}) => {
    
    const dispatch = useDispatch()


    const handleDelete = () => {
        dispatch(deleteWorkout(id))
        dispatch(fetchWorkouts())        
    }

    return (
        <div className="bg-white my-4 rounded-md shadow-lg p-5 relative">
            <h4 className="text-cyan-800 my-4 font-bold font-poppins text-lg">{ title }</h4>
            <div>
                <p className="font-poppins"><span className="font-bold font-poppins">load(kg):</span> { load }</p>
                <p className="font-poppins"><span className="font-bold">reps:</span> { reps }</p>
                <span className="font-poppins text-sm font-bold">{ formatDistanceToNow(new Date(createdAt), { addSuffix: true}) }</span>
            </div>
            <button className="bg-gray-200 hover:bg-cyan-800 hover:text-white p-2 rounded-full font-poppins absolute top-2 right-2"
                onClick={handleDelete}
            ><FaRegTrashAlt /></button>
        </div>
    )
}


export default WorkoutDetails;