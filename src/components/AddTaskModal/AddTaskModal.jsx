import {useState} from "react"
import Modal from "react-modal"
import "./AddTaskModal.css"

Modal.setAppElement("#root")

const AddTaskModal = ({
  isOpen,
  onClose,
  onAddTask,
}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] =
    useState("")
  const [priority, setPriority] =
    useState("medium")
  const [deadline, setDeadline] =
    useState("")
  const [error, setError] = useState("")

  const submitTask = e => {
    e.preventDefault()

    if (!title.trim()) {
      setError("Title is required")
      return
    }

    if (title.length > 50) {
      setError(
        "Title cannot exceed 50 characters"
      )
      return
    }

    if (description.length > 200) {
      setError(
        "Description cannot exceed 200 characters"
      )
      return
    }

    const selectedDate = new Date(deadline)
    const today = new Date()

    today.setHours(0, 0, 0, 0)

    if (selectedDate <= today) {
      setError(
        "Deadline must be a future date"
      )
      return
    }

    onAddTask({
      id: Date.now(),
      title,
      description,
      priority,
      deadline,
      status: "todo",
    })

    setTitle("")
    setDescription("")
    setPriority("medium")
    setDeadline("")
    setError("")

    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="task-modal"
      overlayClassName="task-overlay"
    >
      <div className="modal-header">
        <h2>Add New Task</h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ×
        </button>
      </div>

      <form onSubmit={submitTask}>
        <label>TASK TITLE</label>

        <input
          type="text"
          placeholder="e.g. Design homepage"
          value={title}
          onChange={e =>
            setTitle(e.target.value)
          }
        />

        <label>DESCRIPTION</label>

        <textarea
          rows="4"
          placeholder="Describe the task..."
          value={description}
          onChange={e =>
            setDescription(e.target.value)
          }
        />

        <div className="row">
          <div>
            <label>PRIORITY</label>

            <select
              value={priority}
              onChange={e =>
                setPriority(e.target.value)
              }
            >
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
        </div>

        <label>DEADLINE</label>

        <input
          type="date"
          value={deadline}
          onChange={e =>
            setDeadline(e.target.value)
          }
        />

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <div className="modal-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="create-btn"
          >
            Create Task
          </button>
        </div>
      </form>
    </Modal>
  )
}

export default AddTaskModal