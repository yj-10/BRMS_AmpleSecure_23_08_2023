import Container from "react-bootstrap/Container";
import "../Styles/Layout.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assests/Img/BRMS_LOGO-removebg-preview 1.png";
import { Link, NavLink } from "react-router-dom";
function Layout() {
  return (
    <Navbar bg="light" expand="lg">
     
        <Navbar.Brand>
          <Link to="/">
            <img
              src={Logo}
              style={{
                width: "150px",
                // padding: "10px"
                marginLeft: "60px"
              }}
              className={"img-fluid"}
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav ">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "inactive")}>About Us</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Services"     className={({ isActive }) => (isActive ? "active" : "inactive")}>Services</NavLink>
            </Nav.Link>{" "}
            <Nav.Link>
              <NavLink to="/Career" className={({ isActive }) => (isActive ? "active" : "inactive")}>Career</NavLink>
            </Nav.Link>{" "}
            <Nav.Link>
              <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "inactive")}>Contact Us</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="btn btn-success" style={{backgroundColor:"rgb(5, 190, 14);", padding:"10px", marginRight: "60px", fontWeight:"500"}}>Log in</div>
      
    </Navbar>
  );
}

export default Layout;
