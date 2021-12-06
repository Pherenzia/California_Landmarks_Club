import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { useAuth } from "../util/auth";
import "./Navbar.css";
import { Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

//renamed navbar to navbart for naming convention, also changed app.js
export default function Navbart() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Navbar className="navbar">
      {/* <NavLink exact to="/" className="navbar-link">
        Home
      </NavLink> */}
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
          {/* <NavLink to="/login" className="navbar-link">
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
          <NavLink to="/landmarkPage" className="navbar-link" >
            landmark
          </NavLink> */}
        </>
      )}
      {/* <>
  <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Profile</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>
</> */}
  <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand >Prestiege Worldwide</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/searchresults">Search Results</Nav.Link>
        <Nav.Link href="/landmarkPage">Landmark Page</Nav.Link>
        <NavDropdown title="Login/Signup" id="navbarScrollingDropdown">
          <NavDropdown.Item href="/login">Login</NavDropdown.Item>
          <NavDropdown.Item href="/signup">Signup</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </Navbar>
  );
 

}


