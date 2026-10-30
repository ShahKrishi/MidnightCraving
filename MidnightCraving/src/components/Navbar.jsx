import {
    Container,
    Nav,
    Navbar as BootstrapNavbar,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import FoodIcon from "../assets/images/food.svg";

export default function Navbar() {
    const items = useSelector((state) => state.cart.items);

    const count = items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <BootstrapNavbar
            expand="lg"
            className="midnight-navbar"
            sticky="top"
        >
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/" className="brand">
                    <img src={FoodIcon} alt="logo" height={45} />
                    <span>
                        MIDNIGHT
                        <small>CRAVINGS</small>
                    </span>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle
                    aria-controls="midnight-nav"
                    className="nav-toggle"
                />

                <BootstrapNavbar.Collapse id="midnight-nav">
                    <Nav className="mx-auto nav-links">
                        <Nav.Link as={NavLink} to="/" end>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/menu">
                            Menu
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/manage">
                            Admin
                        </Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link as={NavLink} to="/cart" className="cart-link">
                            Cart <span className="cart-count">{count}</span>
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}
