import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row>
          <Col md={7}>
            <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              Big Fashion Sale 70% Off
            </h1>

            <p style={{ fontSize: "1.1rem", margin: "15px 0" }}>
              Discover trending fashion, electronics, and lifestyle products at
              unbeatable prices. Limited-time offers available now.
            </p>

            <Button variant="danger" className="me-3">
              Shop Now
            </Button>
            <Button variant="outline-light">Explore Deals</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;