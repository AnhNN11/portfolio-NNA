import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar data-bs-theme="dark" style={{ backgroundColor: "White" }}>
      <Container>
        <Navbar.Brand
        // href="#home"
        // style={{
        //   fontSize: "24px",
        //   fontWeight: "bold",
        //   color: "white",
        //   fontStyle: "italic", // Adding italic style
        // }}
        >
          <img
            src="assets/Logo.png"
            alt="logo"
            style={{ width: "110px", height: "45px" }}
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-danger" href="#">
            <i className="fab fa-facebook fa-2x"></i>
          </Nav.Link>
          <Nav.Link className="text-danger" href="#">
            <i className="fab fa-github fa-2x"></i>
          </Nav.Link>
          <Nav.Link className="text-danger" href="#">
            <i className="fas fa-envelope fa-2x"></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
