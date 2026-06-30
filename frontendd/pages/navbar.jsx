import { useContext } from "react";
import { SearchContext } from "./context";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Button,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

export default function MainNavbar() {
  const { search, setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    // Nothing else needed.
    // Products page updates automatically.
  };

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">BuyKart</Nav.Link>
          
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          <Form
            onSubmit={handleSearch}
            className="d-flex mx-auto"
            style={{ width: "45%" }}
          >
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button type="submit">
              🔍
            </Button>
          </Form>

          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/cart">🛒Cart</Nav.Link>

            <DropdownButton
              title="Account"
              variant="outline-primary"
            >
              <Dropdown.Item>
              <Nav.Link as={Link} to="/user/signup">Signup</Nav.Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Nav.Link as={Link} to="/user/login">login</Nav.Link>
              </Dropdown.Item>
            </DropdownButton>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
