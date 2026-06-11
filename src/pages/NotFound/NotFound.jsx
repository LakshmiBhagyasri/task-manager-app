import {Link} from "react-router-dom"
import Header from "../../components/Header/Header"
import "./NotFound.css"

const NotFound = () => {
  const token =
    localStorage.getItem("authToken")

  return (
    <div className="notfound-layout">
      {token && <Header />}

      <div className="notfound-content">
        <div className="notfound-card">
          <h1 className="error-code">
            404
          </h1>

          <h2 className="error-title">
            Page not found
          </h2>

          <p className="error-description">
            The page you are looking for
            does not exist or was moved.
          </p>

          <Link
            to={
              token
                ? "/dashboard"
                : "/login"
            }
            className="back-btn"
          >
            {token
              ? "Back to Dashboard"
              : "Back to Login"}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound