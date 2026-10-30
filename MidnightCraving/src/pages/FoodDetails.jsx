import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function FoodDetails({ foods }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);

    const food = foods.find((item) => item.id === id);

    if (!food) {
        return (
            <Container className="section-space">
                <div className="empty-state">
                    <h2>Dish not found.</h2>
                    <Link to="/menu" className="details-link">
                        Back to menu →
                    </Link>
                </div>
            </Container>
        );
    }

    const handleAdd = () => {
        dispatch(addToCart(food));
        setAdded(true);
    };

    return (
        <Container className="section-space">
            <Link to="/menu" className="back-link">
                ← Back to menu
            </Link>

            <Row className="g-5 align-items-center mt-2">
                <Col lg={6}>
                    <div className="details-image-wrap">
                        <img src={food.image} alt={food.name} />
                        <span className="food-rating">
                            ★ {food.rating ?? "4.8"}
                        </span>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="eyebrow">{food.category}</div>
                    <h1 className="details-title">{food.name}</h1>

                    <div className="details-rating">
                        ★ {food.rating ?? "4.8"}{" "}
                        <span>• Freshly made</span>
                    </div>

                    <p className="details-description">
                        {food.description}
                    </p>

                    <div className="details-price">
                        ₹{Number(food.price).toFixed(2)}
                    </div>

                    <p className="muted-text">
                        Prices are shown in Indian rupees.
                    </p>

                    <Button className="primary-button mt-3" onClick={handleAdd}>
                        {added ? "Added to cart ✓" : "Add to cart — ₹" + food.price}
                    </Button>

                    <div className="details-perks">
                        <span>✦ Carefully prepared</span>
                        <span>✦ Made for your cravings</span>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
