import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard"
import TaskDetails from "./pages/TaskDetails/TaskDetails"
import NotFound from "./pages/NotFound/NotFound"

import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Protected Task Details */}
        <Route
          path="/task/:id"
          element={
            <ProtectedRoute>
              <TaskDetails />
            </ProtectedRoute>
          }
        />

        {/* Not Found */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App