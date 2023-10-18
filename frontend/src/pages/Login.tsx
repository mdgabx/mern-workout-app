import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginUser } from '../components/Authentication/authSlice';
import { useDispatch } from 'react-redux';

type LoginInputs = {
    email: string
    password: string
}

// login yup schema

const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email address is required"),
    password: Yup.string().required("Password is required")
}) 

const Login = () => {
    const dispatch = useDispatch();

    const { 
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<LoginInputs>({
        resolver: yupResolver(loginSchema)
    })
    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        console.log('Login', data);
    
        const { email, password } = data;
    
        try {
          const response = await dispatch(loginUser({ email, password })) as PayloadAction<LoginPayload>;
    
          console.log('Login successful', response.payload);
          // Handle successful login, e.g., redirect to a different page
        } catch (error) {
          console.error('Login error', error);
          // Handle login error, e.g., display an error message to the user
        }
    };

    return (
        <div className="flex mt-10 items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white w-2/5 mt-10 rounded-lg p-6 font-poppins">
                <h3 className="font-bold text-2xl mb-5">Login</h3>

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

export default Login;