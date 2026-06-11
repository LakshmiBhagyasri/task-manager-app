import {useNavigate} from "react-router-dom"
import "./Header.css"

const Header = ({openModal}) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="logo-box">
          📋
        </div>

        <h2 className="sidebar-title">
          Task Manager
        </h2>

        <p className="sidebar-subtitle">
          Project Dashboard
        </p>
      </div>

      <div className="sidebar-bottom">
        <button
          type="button"
          className="add-task-btn"
          onClick={openModal}
        >
          + Add Task
        </button>

        <button
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header