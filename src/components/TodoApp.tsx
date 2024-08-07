import { useState } from "react"
import { TaskList } from "./TaskList"


export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [taskList, setTaskList] = useState<string[]>([])

  const handleDeleteTask = (index: number) => {
    setTaskList(tasks => tasks.filter((task, i) => i !== index))
  }

  const handleAddTask = () => {
    if(newTask.trim() === '') return

    setTaskList([...taskList, newTask])
    setNewTask('')
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div >
        <input type="text" value={newTask} onChange={(e)=> setNewTask(e.target.value)} placeholder="Nueva Tarea"/>
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <TaskList taskList={taskList} deleteTask={handleDeleteTask}/>
    </div>
  )
}