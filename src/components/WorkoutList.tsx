import { useState, type FC } from "react";

interface WorkoutListProps{

}

export const WorkoutList:FC<WorkoutListProps> = () => {

    const [workouts,setWorkouts] = useState(()=>{return JSON.parse(localStorage.getItem('workout') || '[]')})

    const clearList = () => {
        if(window.confirm("Вы уверены, что хотите очистить весь список тренировок?")){
            localStorage.removeItem('workout')
            setWorkouts([])
            alert('Список очищен')
        }
    }

    return (
      <div className="workout-list">
        <h2>История тренировок</h2>
        {workouts.length === 0? (
            <p>Записей пока нет</p>
        ) : (
            <ul>
                {workouts.map((workout:any)=>(
                    <li key={workout.id}>
                        <strong>{workout.user}</strong> — {workout.date} — {workout.exercise}: {workout.weight} кг × {workout.reps} повторений
                    </li>
                ))}
            </ul>
        )}

        {workouts.length > 0 && <button onClick={clearList}>Очистить список</button>}
        
      </div>
    )
}