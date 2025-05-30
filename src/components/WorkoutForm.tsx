import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import type { WorkoutEntry } from "../types/workout";
import '../style/WorkoutForm.css'


interface WorkoutFormProps{

}

export const WorkoutForm:FC<WorkoutFormProps> = ( ) =>{

    const [form,setForm] = useState({
        date:new Date().toISOString().split('T')[0],
        user:'Не выбрано',
        exercise:'Не выбрано',
        weight:'',
        reps:0 
    })

     const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit  = (e:FormEvent) => {
      e.preventDefault()
      const newEntry:WorkoutEntry = {
        id:Date.now().toString(),
        date:form.date,
        user:form.user as 'Не выбрано' | 'Егор' | 'Сергей' | 'Роман' | 'Слава' | 'Руслан',
        exercise:form.exercise as 'Не выбрано' |'Жим лежа' | 'Жим на наклонной скамье' | 'Штанга на бицепс' | 'Французкий жим' | 'Приседания' | 'Становая тяга' | 'Средняя дельта' | 'Бабочка(грудь)'| 'Подтягивания на турнике',
        weight:Number(form.weight),
        reps:form.reps as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 
      }
      const existing = JSON.parse(localStorage.getItem('workout') || '[]')
      localStorage.setItem('workout', JSON.stringify([...existing, newEntry]))
      alert(`Запись сохранена. Данные: Имя:${form.user}, упражнение: ${form.exercise}, вес: ${form.weight}, повторения: ${form.reps}`)

      setForm({...form,exercise:'Не выбрано',weight:'',reps:0})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Дата:
                <input name="date" type="date" value={form.date} onChange={handleChange} required />
            </label> 
            <label>Кто:
                <select name="user" value={form.user} onChange={handleChange}>
                    <option value="Не выбрано">Не выбрано</option>
                    <option value="Егор">Егор</option>
                    <option value="Сергей">Сергей</option>
                    <option value="Роман">Роман</option>
                    <option value="Слава">Слава</option>
                    <option value="Руслан">Руслан</option>
                </select>
            </label>
            <label>Упражнение:
                <select name="exercise" value={form.exercise} onChange={handleChange}>
                    <option value="Не выбрано">Не выбрано</option>
                    <option value="Жим лежа">Жим лежа</option>
                    <option value="Жим на наклонной скамье">Жим на наклонной скамье</option>
                    <option value="Штанга на бицепс">Штанга на бицепс</option>
                    <option value="Французкий жим">Французкий жим</option>
                    <option value="Приседания">Приседания</option>
                    <option value="Становая тяга">Становая тяга</option>
                    <option value="Средняя дельта">Средняя дельта</option>
                    <option value="Бабочка(грудь)">Бабочка(грудь)</option>
                    <option value="Подтягивания на турнике">Подтягивания на турнике</option>
                </select>
            </label>
            <input name="weight" type="number" value={form.weight} onChange={handleChange} />
            <label>Повторения:
                <select name="reps" value={form.reps} onChange={handleChange}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                </select>
            </label>
            <button type="submit">Добавить тренировку</button>
        </form>
    )
}