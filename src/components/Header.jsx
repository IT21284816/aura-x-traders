import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const categories = [
    { name: "Toyota", path: "/vehicles/Toyota" },
    { name: "Honda", path: "/vehicles/Honda" },
    { name: "Suzuki", path: "/vehicles/Suzuki" },
    { name: "Nissan", path: "/vehicles/Nissan" },
    { name: "Mazda", path: "/vehicles/Mazda" },
    { name: "Lexus", path: "/vehicles/Lexus" },
    { name: "Daihatsu", path: "/vehicles/Daihatsu" },
    { name: "Subaru", path: "/vehicles/Subaru" },
  ];

  // Inline CSS (same as previous Header.css)
  const styles = `
    .navbar .nav-item.dropdown:hover .dropdown-menu {
      display: block;
      margin-top: 0;
    }
    .dropdown-menu {
      transition: all 0.2s ease;
    }
    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
  `;

  return (
    <>
      {/* Inject CSS directly in the component */}
      <style>{styles}</style>

      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          {/* Logo / Brand */}
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            <img
              src="/logo.png"
              alt="logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            Aura X Traders
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link as={Link} to="/" className="mx-2">
                Home
              </Nav.Link>

              {/* Categories Dropdown */}
              <NavDropdown
                id="categories-dropdown"
                className="mx-2"
                title={
                  <Link
                    to="/categories"
                    className="text-decoration-none text-dark"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Categories
                  </Link>
                }
              >
                {categories.map((category, index) => (
                  <NavDropdown.Item as={Link} to={category.path} key={index}>
                    {category.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={Link} to="/about" className="mx-2">
                About Us
              </Nav.Link>

              <Nav.Link as={Link} to="/contact" className="mx-2">
                Contact Us
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
