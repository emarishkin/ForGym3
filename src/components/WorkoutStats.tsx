import type { FC } from "react";
import type { WorkoutEntry } from "../types/workout";

interface WorkoutStatsProps{}

export const WorkoutStats:FC<WorkoutStatsProps>  = () => {

    const workouts:WorkoutEntry[] = JSON.parse(localStorage.getItem('workout') || '[]')

    if(workouts.length === 0) {
        return <p>Пока нет статистики — добавь тренировку!</p>
    }

    const uniqueDates = new Set(workouts.map((w)=>w.date))
    const totalSessions = uniqueDates.size
    const totalSets = workouts.length
    const timePerSession = 93
    const totalMinutes = totalSessions * timePerSession
    const avgDuration = totalSessions>0?(totalMinutes/totalSessions):0

    return (
        <div className="workout-stats">
            <h2>Статистика</h2>
            <ul>
                <li><strong>Общее число тренировок:</strong>{totalSessions}</li>
                <li><strong>Общее время в зале:</strong>{totalMinutes} мин</li>
                <li><strong>Средняя длительность:</strong>{avgDuration} мин</li>
                <li><strong>Проработано упражнений из перечня:</strong>{totalSets}</li>
            </ul>
        </div>
    )
}