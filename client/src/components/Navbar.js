import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { useAuth } from "../util/auth";
import "./Navbar.css";
import { useHistory } from "react-router-dom";

import {
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

//renamed navbar to navbart for naming convention, also changed app.js
export default function Navbart() {
  const { isLoggedIn, logout } = useAuth();
  const [search, setSearch] = useState("");
  let history = useHistory();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/searchresults?query=${search}`);
  };
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

      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>Prestige Worldwide</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/searchresults">Search Results</NavLink>
              <NavLink to="/landmarkPage">Landmark Page</NavLink>
              <NavDropdown title="Login/Signup" id="navbarScrollingDropdown">
                <NavDropdown.Item to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item to="/signup">Signup</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearchSubmit}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search"
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Navbar>
  );
}
