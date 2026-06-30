import { useEffect, useState } from "react";

export default function Cart() {
  const [productincart, setProductincart] = useState([]);

  useEffect(() => {
    const cartitems = JSON.parse(localStorage.getItem("cart")) || [];
    setProductincart(cartitems);
  }, []);

  const handleDelete = (index) => {
    const newCart = [...productincart];
    newCart.splice(index, 1);
    setProductincart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = productincart.reduce((total, item) => total + item.price, 0);

  return (
    <div
      className="container py-5"
      style={{ background: "#f8f9fa", minHeight: "100vh" }}
    >
      <div className="row">

        {/* Cart Items */}
        <div className="col-lg-8">

          <div className="card border-0 shadow-sm p-4">

            <h3 className="fw-bold mb-4">
              Shopping Cart ({productincart.length})
            </h3>

            {productincart.length === 0 ? (
              <div className="text-center py-5">
                <h2>🛒</h2>
                <h4>Your Cart is Empty</h4>
              </div>
            ) : (
              productincart.map((product, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center justify-content-between border-bottom py-3"
                >
                  <div className="d-flex">

                    <img
                      src={`http://localhost:3000${product.image}`}
                      alt={product.title}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain",
                        background: "#fff",
                        borderRadius: "10px",
                      }}
                    />

                    <div className="ms-4">
                      <h5>{product.title}</h5>

                      <p
                        className="text-muted"
                        style={{
                          maxWidth: "400px",
                          fontSize: "14px",
                        }}
                      >
                        {product.description}
                      </p>

                      <h5 className="text-danger">
                        ₹{product.price}
                      </h5>
                    </div>

                  </div>

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(index)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}

          </div>
          {/* Trust & Benefits Card */}
<div className="card border-0 shadow-sm mt-4">
  <div className="card-body">

    <h5 className="fw-bold mb-4">Why Shop With Us?</h5>

    <div className="d-flex align-items-center mb-3">
      <div
        className="bg-success text-white rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "45px", height: "45px" }}
      >
        🚚
      </div>

      <div className="ms-3">
        <h6 className="mb-0">Free Delivery</h6>
        <small className="text-muted">
          On orders above ₹499
        </small>
      </div>
    </div>

    <div className="d-flex align-items-center mb-3">
      <div
        className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "45px", height: "45px" }}
      >
        🔄
      </div>

      <div className="ms-3">
        <h6 className="mb-0">Easy Returns</h6>
        <small className="text-muted">
          7-Day hassle-free returns
        </small>
      </div>
    </div>

    <div className="d-flex align-items-center mb-3">
      <div
        className="bg-warning text-dark rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "45px", height: "45px" }}
      >
        🔒
      </div>

      <div className="ms-3">
        <h6 className="mb-0">Secure Payments</h6>
        <small className="text-muted">
          100% safe and encrypted checkout
        </small>
      </div>
    </div>

    <div className="d-flex align-items-center mb-4">
      <div
        className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "45px", height: "45px" }}
      >
        ⭐
      </div>

      <div className="ms-3">
        <h6 className="mb-0">Trusted by 10K+ Customers</h6>
        <small className="text-muted">
          Rated 4.8/5 across India
        </small>
      </div>
    </div>

    <hr />

    <div className="text-center">
      <h6 className="fw-bold">Accepted Payments</h6>

      <div className="d-flex justify-content-center gap-3 fs-3 mt-3">
        💳 📱 🏦 💵
      </div>

      <small className="text-muted d-block mt-2">
        Visa • Mastercard • UPI • Net Banking • Cash on Delivery
      </small>
    </div>

  </div>
</div>
        </div>

        

        {/* Order Summary */}
        <div className="col-lg-4">

          <div
            className="card border-0 shadow-sm p-4"
            style={{ position: "sticky", top: "20px" }}
          >
            <h4 className="fw-bold mb-4">Order Summary</h4>

            <div className="d-flex justify-content-between mb-3">
              <span>Items</span>
              <span>{productincart.length}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Shipping</span>
              <span className="text-success">FREE</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span>Discount</span>
              <span className="text-success">-₹100</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h5 className="text-danger">
                ₹{Math.max(totalPrice - 100, 0)}
              </h5>
            </div>

            <button className="btn btn-warning btn-lg w-100 mt-4">
              Proceed to Checkout
            </button>

            <button className="btn btn-outline-dark w-100 mt-2">
              Continue Shopping
            </button>

            <div className="mt-4">
              <small className="text-muted">
                ✔ Secure Payment <br />
                ✔ Free Delivery <br />
                ✔ Easy Returns
              </small>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}