import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Complaint Management System</h1>

      <div className="home-box">

        <div className="home-buttons">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/register"><button>Register</button></Link>
        </div>

        <div className="home-buttons">
          <Link to="/create"><button>Create Complaint</button></Link>
        </div>

        <div className="home-buttons">
          <Link to="/admin"><button className="admin-btn">Admin Panel</button></Link>
        </div>

      </div>
    </div>
  );
}
