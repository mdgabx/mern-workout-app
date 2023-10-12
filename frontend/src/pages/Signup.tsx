import { useForm, SubmitHandler } from 'react-hook-form';

type SignUpInputs = {
    email: string
    password: string
}

const Signup = () => {
    const { 
        register, 
        handleSubmit, 
        formState: {errors}, 
    } = useForm<SignUpInputs>()

    const onSubmit:SubmitHandler<SignUpInputs> = (data) => {
        console.log('signup', data)
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

export default Signup;