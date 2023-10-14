import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignUpInputs = {
    email: string
    password: string
}

// signup schema
const signupSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
})

const Signup = () => {
    const { 
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<SignUpInputs>({
        resolver: yupResolver(signupSchema)
    })

    const onSubmit:SubmitHandler<SignUpInputs> = (data) => {
        console.log('signup', data)
    }

    return (
        <div className="flex mt-10 items-center justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-2/5 mt-10 rounded-lg p-6 font-poppins">
            <h3 className="font-bold text-2xl mb-5">Sign up</h3>

            <div className="flex flex-col my-3">    
            <label className="font-bold">Email:</label>
            <input className="my-1 p-2 border-2 border-gray-400 rounded-md" placeholder='Email address' {...register('email') } />
            <p >{errors.email?.message}</p>
            </div>
          

            <div className="flex flex-col my-3">
            <label className="font-bold">Password:</label>
            <input className="my-1 p-2 border-2 border-gray-400 rounded-md" placeholder='Password' {...register('password')} /> 
            <p className="text-red">{errors.password?.message}</p>
            </div>
          

            <button className="text-center m-auto bg-cyan-800 p-2 my-3 rounded-md text-white" type="submit">Submit</button>
        </form>
    </div>

    )
}

export default Signup;