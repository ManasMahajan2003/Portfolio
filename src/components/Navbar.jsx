import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3 rounded navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="ms-4 fs-5 title">
          Manas Mahajan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav className="me-5">
            <Nav.Link as={NavLink} to="/" className="me-5 fs-5">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="me-5 fs-5">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects" className="me-5 fs-5">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="me-5 fs-5">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
