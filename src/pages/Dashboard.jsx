import { useNavigate } from 'react-router-dom'
import '../styles/Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // TODO: Clear authentication token
    navigate('/login')
  }

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>EventPro</h2>
        </div>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </nav>

      <div className="dashboard-content">
        <h1>Welcome to EventPro Dashboard</h1>
        <p>You have successfully logged in!</p>
      </div>
    </div>
  )
}
