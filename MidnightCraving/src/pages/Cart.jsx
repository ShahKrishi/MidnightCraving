import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
} from "../store/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();

    const items = useSelector((state) => state.cart.items);

    const subtotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
        <Container className="section-space">
            <div className="eyebrow">ALMOST TIME TO EAT</div>
            <h1 className="page-title">
                Your cart
            </h1>

            {items.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">＋</div>
                    <h2>Your cart is taking a break.</h2>
                    <p>Let's find something worth craving.</p>
                    <Button as={Link} to="/menu" className="primary-button">
                        Explore menu →
                    </Button>
                </div>
            ) : (
                <Row className="g-4 mt-2">
                    <Col lg={8}>
                        <div className="cart-list">
                            {items.map((item) => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.name} />

                                    <div className="cart-item-info">
                                        <span className="food-category">
                                            {item.category}
                                        </span>
                                        <h5>{item.name}</h5>
                                        <p>₹{Number(item.price).toFixed(2)} each</p>

                                        <button
                                            className="remove-link"
                                            onClick={() => dispatch(removeFromCart(item.id))}
                                        >
                                            Remove
                                        </button>
                                    </div>

                                    <div className="cart-item-actions">
                                        <div className="quantity-control">
                                            <button
                                                aria-label={`Decrease ${item.name} quantity`}
                                                onClick={() => dispatch(decreaseQuantity(item.id))}
                                            >
                                                −
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                aria-label={`Increase ${item.name} quantity`}
                                                onClick={() => dispatch(increaseQuantity(item.id))}
                                            >
                                                +
                                            </button>
                                        </div>

                                        <strong>
                                            ₹{(item.price * item.quantity).toFixed(2)}
                                        </strong>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            variant="outline-secondary"
                            className="clear-cart-button mt-3"
                            onClick={() => {
                                if (window.confirm("Clear the entire cart?")) {
                                    dispatch(clearCart());
                                }
                            }}
                        >
                            Clear cart
                        </Button>
                    </Col>

                    <Col lg={4}>
                        <div className="bill-card">
                            <div className="eyebrow">YOUR TOTAL</div>
                            <h3>Order summary</h3>

                            <div className="bill-line">
                                <span>Items subtotal</span>
                                <span>₹{subtotal.toFixed(2)}</span>
                            </div>

                            <div className="bill-line">
                                <span>GST (5%)</span>
                                <span>₹{tax.toFixed(2)}</span>
                            </div>

                            <div className="bill-line">
                                <span>Delivery</span>
                                <span className="free-label">FREE</span>
                            </div>

                            <div className="bill-total">
                                <span>Total bill</span>
                                <strong>₹{total.toFixed(2)}</strong>
                            </div>

                            <Alert variant="dark" className="bill-note">
                                Demo checkout only. No payment is collected.
                            </Alert>

                            <Button
                                className="primary-button w-100"
                                onClick={() =>
                                    window.alert(
                                        `Demo order total: ₹${total.toFixed(2)}`
                                    )
                                }
                            >
                                Place demo order ↗
                            </Button>

                            <Link to="/menu" className="continue-link">
                                ← Continue shopping
                            </Link>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
}
