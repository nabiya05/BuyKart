import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Hero from "./image";
import Catogery from "./catogery";
import { SearchContext } from "./context";

export default function Products() {
  const [products, setProducts] = useState([]);

  // Get search text from Context API
  const { search } = useContext(SearchContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://buykartproject.onrender.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  // Filter products according to search text
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Hero />
      <Catogery />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          padding: "40px 20px",
          background: "#f8f9fa",
          minHeight: "600px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product._id}
              to={`/products/${product._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card
                style={{
                  width: "280px",
                  height: "430px",
                  border: "none",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  style={{
                    height: "220px",
                    background: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px",
                  }}
                >
                  <Card.Img
  variant="top"
  src={
    product.image.startsWith("https")
      ? product.image
      : `http://localhost:3000/${product.image}`
  }
  style={{
    maxHeight: "180px",
    objectFit: "contain",
  }}
/>
                </div>

                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      height: "45px",
                      overflow: "hidden",
                    }}
                  >
                    {product.title}
                  </Card.Title>

                  <Card.Text
                    style={{
                      color: "#666",
                      fontSize: "14px",
                      height: "45px",
                      overflow: "hidden",
                    }}
                  >
                    {product.description}
                  </Card.Text>

                  <h5 className="text-danger fw-bold">
                    ₹{product.price}
                  </h5>
                </Card.Body>
              </Card>
            </Link>
          ))
        ) : (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "80px 20px",
            }}
          >
            <h2>No Products Found 😔</h2>
            <p className="text-muted">
              Try searching with a different product name.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Information Section */}
      <div className="container my-5">
        <div
          className="p-5 rounded-4 shadow-sm"
          style={{ background: "#f8f9fa" }}
        >
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div style={{ fontSize: "45px" }}>🚚</div>
                <h5 className="mt-3 fw-bold">Free Shipping</h5>
                <p className="text-muted">
                  Free delivery on orders above ₹499.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div style={{ fontSize: "45px" }}>🔄</div>
                <h5 className="mt-3 fw-bold">Easy Returns</h5>
                <p className="text-muted">
                  7-day hassle-free returns.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div style={{ fontSize: "45px" }}>💳</div>
                <h5 className="mt-3 fw-bold">Secure Payment</h5>
                <p className="text-muted">
                  Safe & secure payment methods.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <div className="bg-white rounded-4 p-4 h-100 shadow-sm">
                <div style={{ fontSize: "45px" }}>⭐</div>
                <h5 className="mt-3 fw-bold">Trusted Store</h5>
                <p className="text-muted">
                  10,000+ happy customers.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="row text-center">
            <div className="col-md-3">
              <h2 className="fw-bold text-primary">30+</h2>
              <p>Premium Products</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-success">10K+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-danger">4.8★</h2>
              <p>Customer Rating</p>
            </div>

            <div className="col-md-3">
              <h2 className="fw-bold text-warning">24/7</h2>
              <p>Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
