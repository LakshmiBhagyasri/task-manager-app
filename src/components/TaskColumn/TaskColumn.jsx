import TaskCard from "../TaskCard/TaskCard"
import "./TaskColumn.css"

const TaskColumn = ({title, tasks}) => {
  return (
    <div className="task-column">
      <h2>
        {title} ({tasks.length})
      </h2>

      {tasks.length === 0 ? (
        <p>No tasks here</p>
      ) : (
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))
      )}
    </div>
  )
}

export default TaskColumn