import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card";

export default function Product(){
    const [product , setProduct] = useState(null)
    let {id} = useParams();
    const navigate = useNavigate()

const handleAddCart = () => {

  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart.push(product)
  localStorage.setItem("cart", JSON.stringify(cart))
  alert("product added to cart")
}

    useEffect(()=>{
        async function Productdetails(){
            let p =await axios.get(`http://localhost:3000/products/${id}`);
            setProduct(p.data)
            console.log(p.data)
        }
        Productdetails();
    },[id])

    return(
        <>
        <div className="product" style={{display:"flex", gap:"20px", margin:"40px"}}>
        <div className="firstdiv d-flex flex-column justify-content-start align-items-start" > 
           <Card.Img
  variant="top"
  src={
    product?.image?.startsWith("https")
      ? product.image
      : `http://localhost:3000/${product?.image}`
  }
  alt={product?.title}
  style={{
    width: "500px",
    height: "600px",
    padding: "10px",
    objectFit: "contain",
  }}
/>
            {/* Service Information */}
            <div className="mt-4 p-3 border rounded bg-light" style={{ width: "100%" }}>
  <h5 className="mb-3">Why Shop With Us?</h5>

  <div className="d-flex align-items-center mb-3">
    <span style={{ fontSize: "28px" }}>🚚</span>
    <div className="ms-3">
      <strong>Free Delivery</strong>
      <br />
      <small className="text-muted">
        Free shipping on orders above ₹499.
      </small>
    </div>
  </div>

  <div className="d-flex align-items-center mb-3">
    <span style={{ fontSize: "28px" }}>🔄</span>
    <div className="ms-3">
      <strong>Easy Returns</strong>
      <br />
      <small className="text-muted">
        7-Day hassle-free replacement policy.
      </small>
    </div>
  </div>

  <div className="d-flex align-items-center mb-3">
    <span style={{ fontSize: "28px" }}>🛡️</span>
    <div className="ms-3">
      <strong>1 Year Warranty</strong>
      <br />
      <small className="text-muted">
        Manufacturer warranty included.
      </small>
    </div>
  </div>

  <div className="d-flex align-items-center mb-3">
    <span style={{ fontSize: "28px" }}>💳</span>
    <div className="ms-3">
      <strong>Secure Payment</strong>
      <br />
      <small className="text-muted">
        UPI, Cards, Net Banking & Cash on Delivery.
      </small>
    </div>
  </div>

  <div className="d-flex align-items-center">
    <span style={{ fontSize: "28px" }}>⭐</span>
    <div className="ms-3">
      <strong>Trusted by 50,000+ Customers</strong>
      <br />
      <small className="text-muted">
        Rated 4.8/5 by verified buyers.
      </small>
    </div>
  </div>
</div>
{/* Featured Products */}
<div className="mt-4">
  <h5 className="mb-3">Customers Also Viewed</h5>

  <div className="row g-3">

    <div className="col-4">
      <div className="card text-center shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300"
          className="card-img-top"
          style={{ height: "120px", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body p-2">
          <small className="fw-bold">Running Shoes</small>
          <p className="text-danger mb-0">₹2,499</p>
        </div>
      </div>
    </div>

    <div className="col-4">
      <div className="card text-center shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300"
          className="card-img-top"
          style={{ height: "120px", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body p-2">
          <small className="fw-bold">Smart Watch</small>
          <p className="text-danger mb-0">₹3,999</p>
        </div>
      </div>
    </div>

    <div className="col-4">
      <div className="card text-center shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
          className="card-img-top"
          style={{ height: "120px", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body p-2">
          <small className="fw-bold">Headphones</small>
          <p className="text-danger mb-0">₹1,799</p>
        </div>
      </div>
    </div>

  </div>
</div>
{/* Shop With Confidence */}
<div className="card mt-4 shadow-sm border-0">
  <div className="card-body">
    <h5 className="mb-4 text-center">🛒 Shop With Confidence</h5>

    <div className="row text-center">

      <div className="col-6 mb-4">
        <div style={{ fontSize: "35px" }}>✅</div>
        <h6 className="mt-2">100% Genuine</h6>
        <small className="text-muted">
          All products are authentic and quality checked.
        </small>
      </div>

      <div className="col-6 mb-4">
        <div style={{ fontSize: "35px" }}>🚀</div>
        <h6 className="mt-2">Fast Shipping</h6>
        <small className="text-muted">
          Quick dispatch with live order tracking.
        </small>
      </div>

      <div className="col-6">
        <div style={{ fontSize: "35px" }}>💰</div>
        <h6 className="mt-2">Best Price</h6>
        <small className="text-muted">
          Competitive prices with exciting offers.
        </small>
      </div>

      <div className="col-6">
        <div style={{ fontSize: "35px" }}>📞</div>
        <h6 className="mt-2">24/7 Support</h6>
        <small className="text-muted">
          Friendly customer support whenever you need help.
        </small>
      </div>

    </div>
  </div>
</div>
        </div>
        
        <div className="secounddiv">
            <div
  className="p-1"
  style={{ maxWidth: "600px" }}
>
  <span className="badge bg-success mb-3">Best Seller</span>

  <h2 className="fw-bold">{product?.title}</h2>

  <div className="d-flex align-items-center mb-3">
    <span className="text-warning fs-5">★★★★★</span>
    <span className="ms-2 text-muted">(4.8 • 1,245 Reviews)</span>
  </div>

  <h3 className="text-danger fw-bold mb-3">
    ₹{product?.price}
    <span
      className="text-decoration-line-through text-muted fs-5 ms-2"
    >
      ₹{product?.price + 1000}
    </span>
    <span className="badge bg-danger ms-2">20% OFF</span>
  </h3>
  <p className="text-muted" style={{ lineHeight: "1.8" }}>
    {product?.description}
  </p>
</div>
            <p className="text-success fw-bold">
              ✔ In Stock
            </p>

            <p>
              <strong>Brand:</strong> BuyKart
            </p>

            <p>
              <strong>Category:</strong> Electronics
            </p>

            <p>{product?.description}</p>

            {/* Offers */}
            <div className="border rounded p-3 mb-3 bg-light">
              <h5>Available Offers</h5>

              <p>🎉 10% Instant Discount using HDFC Credit Card.</p>

              <p>🚚 Free Delivery on orders above ₹499.</p>

              <p>💳 EMI Available from ₹499/month.</p>

              <p>🔄 7 Days Easy Replacement.</p>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 mb-4">
              <button
                className="btn btn-warning px-4"
                onClick={handleAddCart}
              >
                Add to Cart
              </button>

              <button
                className="btn btn-danger px-4"
                onClick={() => navigate("/cart")}
              >
                Buy Now
              </button>
            </div>

            {/* Delivery */}
            <div className="border rounded p-3 mb-3">
              <h5>Delivery</h5>

              <p>📍 Deliver to: Hyderabad - 500001</p>

              <p>🚚 Free Delivery by Tomorrow</p>

              <p>💰 Cash on Delivery Available</p>
            </div>

            {/* Specifications */}
            <div className="border rounded p-3 mb-3">
              <h5>Product Specifications</h5>

              <table className="table">
                <tbody>
                  <tr>
                    <td>Brand</td>
                    <td>BuyKart</td>
                  </tr>

                  <tr>
                    <td>Color</td>
                    <td>Black</td>
                  </tr>

                  <tr>
                    <td>Material</td>
                    <td>Premium Quality</td>
                  </tr>

                  <tr>
                    <td>Warranty</td>
                    <td>1 Year</td>
                  </tr>

                  <tr>
                    <td>Return Policy</td>
                    <td>7 Days Replacement</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Customer Reviews */}
            <div className="border rounded p-3">
              <h5>Customer Reviews</h5>

              <div className="mb-3">
                ⭐⭐⭐⭐⭐
                <p className="mb-0">
                  Excellent product. Quality is amazing and delivery was fast.
                </p>
                <small>- Rahul Sharma</small>
              </div>

              <hr />

              <div className="mb-3">
                ⭐⭐⭐⭐☆
                <p className="mb-0">
                  Worth the price. Packaging was very good.
                </p>
                <small>- Priya Reddy</small>
              </div>

              <hr />

              <div>
                ⭐⭐⭐⭐⭐
                <p className="mb-0">
                  Highly recommended. Will purchase again.
                </p>
                <small>- Arjun Kumar</small>
              </div>
            </div>
        </div>

        </div>
        </>
    )
}