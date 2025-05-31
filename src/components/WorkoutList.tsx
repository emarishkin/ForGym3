import { useState, type FC } from "react";
import type { WorkoutEntry } from "../types/workout";
import '../style/WorkoutList.css'

interface WorkoutListProps {}

export const WorkoutList: FC<WorkoutListProps> = () => {
    const [workouts, setWorkouts] = useState<WorkoutEntry[]>(() => {
        return JSON.parse(localStorage.getItem('workout') || '[]');
    });

    const groupedWorkouts = workouts.reduce((acc: Record<string, WorkoutEntry[]>, workout) => {
        const key = `${workout.date}_${workout.user}`;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(workout);
        return acc;
    }, {});

    const sortedGroupKeys = Object.keys(groupedWorkouts).sort().reverse();

    const clearList = () => {
        if (window.confirm("Вы уверены, что хотите очистить весь список тренировок?")) {
            localStorage.removeItem('workout');
            setWorkouts([]);
            alert('Список очищен');
        }
    };

    const delItem = (id:string) => {
         const updatedWorkouts = workouts.filter((workout)=>workout.id !== id)
         setWorkouts(updatedWorkouts)
         localStorage.setItem('workout', JSON.stringify(updatedWorkouts))
         alert('Упражнение удалено  ')
    }

    return (
        <div className="workout-list">
            <h2 className="workout-list__title">История тренировок</h2>
            
            {workouts.length === 0 ? (
                <p className="workout-list__empty">Записей пока нет</p>
            ) : (
                <div className="workout-groups">
                    {sortedGroupKeys.map((groupKey) => {
                        const [date, user] = groupKey.split('_');
                        const groupWorkouts = groupedWorkouts[groupKey];
                        
                        return (
                            <div key={groupKey} className="workout-group">
                                <h3 className="workout-group__header">{date} — {user}</h3>
                                <ul className="workout-group__list">
                                    {groupWorkouts.map((workout) => (
                                        <li key={workout.id} className="workout-item">
                                            <div style={{display:'flex',flexDirection:'column'}}>
                                            <span className="workout-item__exercise">{workout.exercise}</span>
                                            <span className="workout-item__details">
                                                {workout.weight} кг × {workout.reps} повторений
                                                {workout.duration > 0 && (
                                                    <span className="workout-item__duration"> (Время: {workout.duration} мин)</span>
                                                )}
                                            </span>
                                             </div>
                                            <button className="workout-item__delete-btn1" onClick={()=>delItem(workout.id)}>Удалить</button>
                                            
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            )}

            {workouts.length > 0 && (
                <button className="workout-list__clear" onClick={clearList}>
                    Очистить список
                </button>
            )}
        </div>
    );
};