import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
      <NavLink exact to="/" className="navbar-link">
        Home
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/protected" className="navbar-link">
            User
          </NavLink>
          <button className="navbar-link" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link">
            Signup
          </NavLink>
          <NavLink to="/profile" className="navbar-link">
            Profile
          </NavLink>
          <NavLink to="/searchresults" className="navbar-link" >
            Results
          </NavLink>
        </>
      )}
    </nav>
  );
}