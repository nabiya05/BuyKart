import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shoe from "../src/assets/shoe.jpg"
import fashion from "../src/assets/fashion.jpg"

const categories = [
  { name: "Fashion", img: fashion },
  { name: "Electronics", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5" },
  { name: "Shoes", img: shoe },
  { name: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { name: "Home", img: "https://images.unsplash.com/photo-1484154218962-a197022b5858" },
  { name: "Grocery", img: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
];

function Category() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "50px 0",
      }}
    >
      <Container>

        <div className="text-center mb-5">
          <h2 className="fw-bold">Shop by Category</h2>
          <p className="text-muted">
            Explore our most popular collections
          </p>
        </div>

        <Row className="justify-content-center g-4">

          {categories.map((cat, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={2}
              className="text-center"
            >
              <div
                style={{
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    margin: "auto",
                    borderRadius: "50%",
                    overflow: "hidden",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
                    border: "4px solid white",
                  }}
                >
                  <Image
                    src={cat.img}
                    fluid
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <h6
                  className="mt-3 fw-semibold"
                  style={{ color: "#333" }}
                >
                  {cat.name}
                </h6>
              </div>
            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
}

export default Category;