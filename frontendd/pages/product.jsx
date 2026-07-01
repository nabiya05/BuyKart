import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Card from "react-bootstrap/Card";
import {Row, Col, Container} from "react-bootstrap"

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
        <Container fluid className="py-4 px-lg-5 px-3">
  <Row className="g-4">

    {/* LEFT SIDE */}
    <Col lg={5} md={12}>
      <div className="d-flex flex-column">

        <Card.Img
          variant="top"
          src={
            product?.image?.startsWith("https")
              ? product.image
              : `http://localhost:3000/${product?.image}`
          }
          alt={product?.title}
          style={{
            width: "100%",
            maxHeight: "600px",
            objectFit: "contain",
            borderRadius: "10px",
            background: "#fff",
            padding: "15px"
          }}
        />
        
        </div>
    </Col>

    {/* RIGHT SIDE */}

    <Col lg={7} md={12}>

      <span className="badge bg-success mb-3">
        Best Seller
      </span>

      <h2 className="fw-bold">
        {product?.title}
      </h2>

      <div className="d-flex align-items-center flex-wrap mb-3">

        <span className="text-warning fs-5">
          ★★★★★
        </span>

        <span className="ms-2 text-muted">
          (4.8 • 1,245 Reviews)
        </span>

      </div>

      <h3 className="text-danger fw-bold">

        ₹{product?.price}

        <span className="text-decoration-line-through text-muted fs-5 ms-2">

          ₹{product?.price + 1000}

        </span>

        <span className="badge bg-danger ms-2">
          20% OFF
        </span>

      </h3>

      <p className="text-muted mt-3">
        {product?.description}
      </p>

      <p className="text-success fw-bold">
        ✔ In Stock
      </p>

      <p>
        <strong>Brand :</strong> BuyKart
      </p>

      <p>
        <strong>Category :</strong> Electronics
      </p>

      {/* Offers */}

      <div className="border rounded p-3 bg-light mb-4">

        <h5>Available Offers</h5>

        <p>🎉 10% Instant Discount using HDFC Credit Card.</p>

        <p>🚚 Free Delivery on orders above ₹499.</p>

        <p>💳 EMI Available from ₹499/month.</p>

        <p>🔄 7 Days Easy Replacement.</p>

      </div>

      {/* Buttons */}

      <div className="d-grid gap-3 d-md-flex mb-4">

        <button
          className="btn btn-warning flex-fill"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>

        <button
          className="btn btn-danger flex-fill"
          onClick={() => navigate("/cart")}
        >
          Buy Now
        </button>

      </div>

      {/* Delivery */}

      
    </Col>

  </Row>
</Container>
        </>
    )
}
