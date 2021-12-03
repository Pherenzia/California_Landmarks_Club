import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useAuth } from "../util/auth";
import "./Navbar.css";

//renamed navbar to navbart for naming convention, also changed app.js
export default function Navbart() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar className="navbar">
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
        </>
      )}
    </Navbar>
  );
}


