import {useState} from "react"
import {useNavigate} from "react-router-dom"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (!email || !password) {
      setErrorMsg("Email and password are required")
      return
    }

    if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters")
      return
    }

    // Sample login credentials
    if (
      email === "sara@example.com" &&
      password === "user123"
    ) {
      localStorage.setItem(
        "authToken",
        "sample-token"
      )

      navigate("/dashboard")
    } else {
      setErrorMsg("Invalid email or password")
    }
  }

  return (
    <div className="login-page">
      <div className="left-panel">
        <div className="left-content">
          <div className="logo-box">
            📋
          </div>

          <h1 className="app-title">
            Task Manager
          </h1>

          <p className="left-description">
            Sign in to open your project dashboard.
          </p>

          <ul className="features-list">
            <li>
              Plan work across To Do, In Progress,
              and Done
            </li>

            <li>
              Track priorities and deadlines in one
              place
            </li>

            <li>
              Your board is saved in this browser
            </li>
          </ul>
        </div>
      </div>

      <div className="right-panel">
        <form
          className="login-card"
          onSubmit={handleSubmit}
        >
          <h2 className="welcome-title">
            Welcome back
          </h2>

          <p className="welcome-text">
            Use your account email and password to
            continue.
          </p>

          <label htmlFor="email">
            EMAIL
          </label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e =>
              setEmail(e.target.value)
            }
          />

          <label htmlFor="password">
            PASSWORD
          </label>

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="signin-btn"
          >
            Sign In
          </button>

          {errorMsg && (
            <p className="error-msg">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login