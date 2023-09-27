import * as Yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchWorkouts } from './Workouts/workoutSlice';

// setting up the schema

const workoutSchema = Yup.object().shape({
    title: Yup.string().max(20, 'Only 20 characters at most').required('Title is required'),
    reps: Yup.number().required('Number of reps is required'),
    load: Yup.number().required('Number of load is required'),
})

// interface for the form inputs 
export interface FormInputs {
    title: string,
    load: number,
    reps: number,
}

const WorkoutForm = () => {

    const dispatch = useDispatch();

    // set up react hook form libraries for the workout form
    const { 
        register, 
        handleSubmit,
        formState: { errors },
     } = useForm<FormInputs>({
        resolver: yupResolver(workoutSchema)
    });

    // function to handle form submit
    const workoutFormSubmit:SubmitHandler<FormInputs> = async (data) => {
        // send the data in form to the database
        try {
            await axios.post('http://localhost:4000/api/workouts', data)

            dispatch(fetchWorkouts() as any) // reload the data after the successful submission
           
        } catch (err) {
            console.warn('err', err)
        }
    }

    return (
        <form 
        className="w-1/3 flex flex-col align-center justify-start mx-8 px-8 py-6" 
        onSubmit={handleSubmit(workoutFormSubmit)}>
            <h4 className="text-cyan-800 text-xl font-bold my-4 font-poppins">Workout Form</h4>
            <label className="my-2 font-poppins">Title: </label>
            <input className="shadow-md rounded-md p-2 my-2 font-poppins" type="text" {...register('title')} />
            <p className="font-poppins text-red-800">{errors.title?.message}</p>

            <label className="my-2 font-poppins">Loads: </label>
            <input className="shadow-md rounded-md p-2 my-2 font-poppins" type="number" {...register('load')}/>
            <p className="font-poppins text-red-800">{errors.load?.message}</p>

            <label className="my-2 font-poppins">Reps: </label>
            <input className="shadow-md rounded-md p-2 my-2 font-poppins" type="number" {...register('reps')} />
            <p className="font-poppins text-red-800">{errors.reps?.message}</p>

            <button 
            className="w-20 py-3 rounded-md text-center mx-auto mt-4 text-white bg-cyan-800 font-poppins" 
            type="submit">
                Submit
            </button>
          
        </form>

    )
}

export default WorkoutForm;