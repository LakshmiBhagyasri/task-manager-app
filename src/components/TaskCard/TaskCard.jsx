import {Link} from "react-router-dom"
import "./TaskCard.css"

const TaskCard = ({task}) => {
  const priorityClass = {
    high: "high",
    medium: "medium",
    low: "low",
  }

  return (
    <Link
      to={`/task/${task.id}`}
      className="task-link"
    >
      <div className="task-card">
        <h3>{task.title}</h3>

        <p>
          {task.description.slice(0, 100)}...
        </p>

        <div className="task-footer">
          <span
            className={`priority-badge ${priorityClass[task.priority]}`}
          >
            {task.priority}
          </span>

          <span>
            {task.deadline}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default TaskCard