import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Crocosoft</Navbar.Brand>
        </Container>
      </Navbar>
      <main className="mt-3">{children}</main>
    </div>
  );
};

export default Layout;
