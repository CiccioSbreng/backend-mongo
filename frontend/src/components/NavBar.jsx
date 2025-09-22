import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          StriveBlog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/addPost" className="nav-link-custom">Crea post</Nav.Link>
            <NavDropdown title="Altro" id="basic-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/about">Chi siamo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">Contatti</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://react-bootstrap.github.io/">
                Docs Bootstrap
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
