import {useState} from "react"
import {useParams, Link} from "react-router-dom"

import Header from "../../components/Header/Header"
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal"

import {getTasks, saveTasks} from "../../utils/localStorage"

import "./TaskDetails.css"

const TaskDetails = () => {
  const {id} = useParams()

  const [isModalOpen, setIsModalOpen] =
    useState(false)

  const tasks = getTasks() || []

  const task = tasks.find(
    eachTask => eachTask.id === Number(id)
  )

  const handleAddTask = newTask => {
    const updatedTasks = [
      ...tasks,
      newTask,
    ]

    saveTasks(updatedTasks)
  }

  if (!task) {
    return (
      <div className="task-layout">
        <Header
          openModal={() =>
            setIsModalOpen(true)
          }
        />

        <div className="task-content">
          <h1>Task Not Found</h1>
        </div>

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() =>
            setIsModalOpen(false)
          }
          onAddTask={handleAddTask}
        />
      </div>
    )
  }

  return (
    <div className="task-layout">
      <Header
        openModal={() =>
          setIsModalOpen(true)
        }
      />

      <div className="task-content">
        <Link
          to="/dashboard"
          className="back-link"
        >
          ← Back to board
        </Link>

        <div
          className={`priority-badge ${task.priority}`}
        >
          {task.priority.toUpperCase()}
        </div>

        <h1 className="task-title">
          {task.title}
        </h1>

        <div className="info-card">
          <div className="info-row">
            <span>Status</span>

            <strong>
              {task.status === "todo"
                ? "To Do"
                : task.status ===
                  "inprogress"
                ? "In Progress"
                : "Done"}
            </strong>
          </div>

          <hr />

          <div className="info-row">
            <span>Deadline</span>

            <strong>
              {new Date(
                task.deadline
              ).toLocaleDateString()}
            </strong>
          </div>
        </div>

        <div className="description-card">
          <h4>DESCRIPTION</h4>

          <p>{task.description}</p>
        </div>
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() =>
          setIsModalOpen(false)
        }
        onAddTask={handleAddTask}
      />
    </div>
  )
}

export default TaskDetails