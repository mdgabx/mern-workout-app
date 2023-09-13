
const WorkoutDetails:React.FC<{ 
    title: string, 
    reps: number, 
    load: number 
}> = ({
    title, 
    reps, 
    load }) => 
{

    return (
        <div className="bg-white my-4 rounded-md shadow-lg p-5">
            <h4 className="text-cyan-800 my-4 font-bold font-poppins text-lg">{ title }</h4>
            <div>
                <p className="font-poppins"><span className="font-bold font-poppins">load(kg):</span> { load }</p>
                <p className="font-poppins"><span className="font-bold">reps:</span> { reps }</p>
            </div>
        </div>
    )
}

export default WorkoutDetails;