import {useState, useEffect} from "react"
import "./Dashboard.css"

import Header from "../../components/Header/Header"
import TaskColumn from "../../components/TaskColumn/TaskColumn"
import AddTaskModal from "../../components/AddTaskModal/AddTaskModal"

import initialTasks from "../../data/tasks"
import {getTasks, saveTasks} from "../../utils/localStorage"

const Dashboard = () => {
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [priority, setPriority] = useState("all")
  const [isModalOpen, setIsModalOpen] =
    useState(false)

  useEffect(() => {
    const storedTasks = getTasks()

    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks)
    } else {
      setTasks(initialTasks)
      saveTasks(initialTasks)
    }
  }, [])

  const handleAddTask = newTask => {
    const updatedTasks = [...tasks, newTask]

    setTasks(updatedTasks)
    saveTasks(updatedTasks)
  }

  const filteredTasks = tasks.filter(task => {
    const matchesSearch =
      task.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(search.toLowerCase())

    const matchesPriority =
      priority === "all" ||
      task.priority === priority

    return matchesSearch && matchesPriority
  })

  const todoTasks = filteredTasks.filter(
    task => task.status === "todo"
  )

  const inProgressTasks = filteredTasks.filter(
    task => task.status === "inprogress"
  )

  const doneTasks = filteredTasks.filter(
    task => task.status === "done"
  )

  return (
    <div className="dashboard-layout">
      <Header
        openModal={() =>
          setIsModalOpen(true)
        }
      />

      <div className="dashboard-content">
        <div className="filters">
          <input
            type="text"
            placeholder="Search Tasks"
            value={search}
            onChange={e =>
              setSearch(e.target.value)
            }
          />

          <select
            value={priority}
            onChange={e =>
              setPriority(e.target.value)
            }
          >
            <option value="all">
              All Priorities
            </option>

            <option value="low">
              Low
            </option>

            <option value="medium">
              Medium
            </option>

            <option value="high">
              High
            </option>
          </select>
        </div>

        <div className="columns-container">
          <TaskColumn
            title="To Do"
            tasks={todoTasks}
          />

          <TaskColumn
            title="In Progress"
            tasks={inProgressTasks}
          />

          <TaskColumn
            title="Done"
            tasks={doneTasks}
          />
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

export default Dashboard