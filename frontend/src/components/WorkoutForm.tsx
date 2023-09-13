

const WorkoutForm = () => {
    return (
        <form className="w-1/3 flex flex-col align-center justify-start mx-8 px-8 py-6">
            <h4>Workout Form</h4>
            <label>Title: </label>
            <input type="text" />

            <label>Loads: </label>
            <input type="number" />

            <label>Reps: </label>
            <input type="number" />

            <button type="submit">Submit</button>
          
        </form>

    )
}

export default WorkoutForm;