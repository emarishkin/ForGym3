import type { FC } from "react";
import type { WorkoutEntry } from "../types/workout";
import '../style/WorkoutStats.css'

interface WorkoutStatsProps {}

export const WorkoutStats: FC<WorkoutStatsProps> = () => {
    const workouts: WorkoutEntry[] = JSON.parse(localStorage.getItem('workout') || '[]');

    if (workouts.length === 0) {
        return <p className="workout-stats__empty">Пока нет статистики — добавь тренировку!</p>;
    }

    const totalSessions = new Set(workouts.map((w) => w.date)).size;
    const totalSets = workouts.length;
    const timePerSession = 15;
    const totalMinutes = workouts.reduce((sum, w) => sum + (w.duration || timePerSession), 0);
    const avgDuration = totalSessions > 0 ? Math.round(totalMinutes / totalSessions) : 0;

    return (
        <div className="workout-stats">
            <h2 className="workout-stats__title">Статистика</h2>
            <ul className="stats-list">
                <li className="stats-item">
                    <span className="stats-label">Общее число тренировок:</span>
                    <span className="stats-value">{totalSessions}</span>
                </li>
                <li className="stats-item">
                    <span className="stats-label">Общее время в зале:</span>
                    <span className="stats-value">{totalMinutes} мин</span>
                </li>
                <li className="stats-item">
                    <span className="stats-label">Средняя длительность:</span>
                    <span className="stats-value">{avgDuration} мин</span>
                </li>
                <li className="stats-item">
                    <span className="stats-label">Проработано упражнений:</span>
                    <span className="stats-value">{totalSets}</span>
                </li>
            </ul>
        </div>
    );
};