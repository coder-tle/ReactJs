
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

  return (
    <>
      {tasks.map((task) => (<Task key={task.id} task={task} deleteTask={onDelete} onToggle={onToggle} />
      ))
      }
    </>
  )
}

export default Tasks

