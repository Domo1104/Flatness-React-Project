import React, {useState} from "react"

function WorkoutForm({ onSubmit}){
    const [distance, setDistance] =useState('')
    const [time, setTime] = useState('')
    const [exercise, setExercise] = useState('')
    const [date, setDate] = useState('')

function handleDateChange(e){
    e.preventDefault()
    setDate(e.target.value)
}

function handleDistanceChange(e){
    e.preventDefault()
    setDistance(e.target.value)
}

function handleTimeChange(e){
    e.preventDefault()
    setTime(e.target.value)
}

function handleExerciseChange(e){
    e.preventDefault(e)
    setExercise(e.target.value)
}


return (
<form onSubmit={()=>{
    const newWorkout ={
        id : "",
        date : date,
        distance : distance,
        timeSpent: time,
        workoutType: exercise
    }
    onSubmit(newWorkout)
    }
}>
    
<div className="form-entry">
<div className="col-5">
        <input 
        className="form-control"
        type = "text"
        name ="date"
        placeholder = "What date do you complete this workout?"
        value={date}
        onChange={handleDateChange}
/></div>
    <div className="col-5">
        <input 
        className="form-control"
        type = "text"
        name ="distance"
        placeholder = "How far did you make it?"
        value={distance}
        onChange={handleDistanceChange}
/>
  </div>
    <div className="col-5">
        <input 
        className="form-control"
        type = "text"
        name ="time"
        placeholder = "How much time in minutes?"
        value={time}
        onChange={handleTimeChange}
/>
</div>
<select className ="form-control" name="exercise" value={exercise} onChange={handleExerciseChange}>
    <option value= "Walking">Walking</option>
    <option value= "Running">Running</option>
    <option value="Swimming">Swimming</option>
    <option value= "Biking">Biking</option>
    <option value= "Rollerblading">Rollerblading</option>

            </select>
            <button>Submit Workout</button>
    </div>
</form>
)
}




export default WorkoutForm;