import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://buykartproject.onrender.com/user/login",
        {
          username,
          password,
        }
      );

      alert("Login Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
      alert("Invalid Username or Password");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Container>
        <div className="d-flex justify-content-center">
          <Card
            className="shadow-lg p-4"
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "15px",
            }}
          >
            <h2 className="text-center mb-4">Login</h2>

            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <Form.Text muted>
                  Password must be 8–20 characters long and contain letters and
                  numbers.
                </Form.Text>
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Login;
