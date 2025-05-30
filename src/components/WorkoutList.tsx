import type { FC } from "react";

interface WorkoutListProps{

}

export const WorkoutList:FC<WorkoutListProps> = () => {

    const workouts = JSON.parse(localStorage.getItem('workout') || '[]')

    return (
      <div className="workout-list">
        <h2>История тренировок</h2>
        {workouts.lenght === 0? (
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
      </div>
    )
}