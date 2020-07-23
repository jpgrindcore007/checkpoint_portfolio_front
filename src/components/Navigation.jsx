import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Jumbotron,
  Container,
  Col,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="navbar navbar-dark bg-dark" light expand="md">
        <NavbarBrand href="/">Accueil</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">A propos</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">Formation</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">Projet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/">Contact</NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>

      <Jumbotron fluid>
        <Container fluid>
          <Col>
            <h1 className="display-3">Développeur Web junior</h1>
            <p className="lead">jean-paul susini ravé</p>
          </Col>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Navigation;
