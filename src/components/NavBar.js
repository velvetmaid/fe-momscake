import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <Navbar
      style={{ marginTop: 30 }}
      className="mx-auto"
      collapseOnSelect
      expand="lg"
    >
      <Container className="justify-content-center">
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pricing">Product</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
