import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function FoodCard({ food }) {
    const dispatch = useDispatch();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        dispatch(addToCart(food));
        setAdded(true);
    };

    return (
        <Card className="food-card h-100">
            <div className="food-image-wrap">
                <Card.Img
                    variant="top"
                    src={food.image}
                    alt={food.name}
                    className="food-image"
                    loading="lazy"
                />

                {food.featured && (
                    <span className="food-tag">BESTSELLER</span>
                )}

                <span className="food-rating">
                    ★ {food.rating}
                </span>
            </div>

            <Card.Body className="d-flex flex-column">
                <div className="food-category">{food.category}</div>
                <Card.Title className="food-title">
                    {food.name}
                </Card.Title>

                <Card.Text className="food-description">
                    {food.description}
                </Card.Text>

                <div className="food-card-bottom mt-auto">
                    <span className="food-price">
                        ₹{Number(food.price).toFixed(2)}
                    </span>

                    <Button
                        className="add-button"
                        onClick={handleAdd}
                        aria-label={`Add ${food.name} to cart`}
                    >
                        {added ? "Added ✓" : "+ Add"}
                    </Button>
                </div>

                <Link
                    to={`/food/${food.id}`}
                    className="details-link mt-3"
                >
                    View details ↗
                </Link>
            </Card.Body>
        </Card>
    );
}
