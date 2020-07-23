import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Jumbotron,
  Container,
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
          <h1 className="display-3">jean-paul susini r.</h1>
          <p className="lead">En formation développeur web</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Navigation;
