import { useForm, SubmitHandler } from 'react-hook-form';

type LoginInputs = {
    email: string
    password: string
}

const Login = () => {
    const { 
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<LoginInputs>()

    const onSubmit:SubmitHandler<LoginInputs> = (data) => {
        console.log('Login', data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Sign up</h3>

                <label>Email:</label>
                <input placeholder='Email address' {...register('email') } />
                <p>{errors.email?.message}</p>

                <label>Password:</label>
                <input placeholder='Password' {...register('password')} /> 
                <p>{errors.password?.message}</p>

                <button type="submit">Submit</button>
            </form>
        </>

    )
}

export default Login;