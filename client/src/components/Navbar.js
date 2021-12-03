import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
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
          <NavLink to="/profile" className="navbar-link">
            Profile
          </NavLink>
        </>
      )}
    </Navbar>
  );
<<<<<<< HEAD
}



<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
=======
}
>>>>>>> 0147d8b59972811f0fae2cf53e99a0383d5fcb1a
