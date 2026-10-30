import { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const emptyFood = {
    name: "",
    category: "",
    price: "",
    rating: "",
    description: "",
    image: "",
    featured: false,
};

export default function FoodForm({
    selectedFood,
    onSave,
    onCancel,
}) {
    const [form, setForm] = useState(emptyFood);
    const [error, setError] = useState("");

    useEffect(() => {
        setForm(
            selectedFood
                ? {
                    ...selectedFood,
                    price: String(selectedFood.price),
                    rating: String(selectedFood.rating ?? 4.8),
                }
                : emptyFood
        );
        setError("");
    }, [selectedFood]);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setForm((previous) => ({
            ...previous,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            !form.name.trim() ||
            !form.category.trim() ||
            !form.description.trim() ||
            !form.image.trim()
        ) {
            setError("Please complete all required fields.");
            return;
        }

        const price = Number(form.price);
        const rating = Number(form.rating);

        if (!Number.isFinite(price) || price <= 0) {
            setError("Enter a price greater than zero.");
            return;
        }

        if (!Number.isFinite(rating) || rating < 0 || rating > 5) {
            setError("Rating must be between 0 and 5.");
            return;
        }

        try {
            const url = new URL(form.image);

            if (!["http:", "https:"].includes(url.protocol)) {
                throw new Error("Invalid image URL");
            }
        } catch {
            setError("Enter a valid image URL starting with http or https.");
            return;
        }

        onSave({
            ...form,
            id: selectedFood?.id ?? crypto.randomUUID(),
            name: form.name.trim(),
            category: form.category.trim(),
            description: form.description.trim(),
            price,
            rating,
        });

        setForm(emptyFood);
        setError("");
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row className="g-3">
                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Food name *</Form.Label>
                        <Form.Control
                            className="dark-input"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="e.g. Smoky BBQ Burger"
                            required
                            maxLength={80}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Category *</Form.Label>
                        <Form.Control
                            className="dark-input"
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            placeholder="e.g. Burgers"
                            required
                            maxLength={40}
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Price (₹) *</Form.Label>
                        <Form.Control
                            className="dark-input"
                            type="number"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            min="0.01"
                            step="0.01"
                            required
                        />
                    </Form.Group>
                </Col>

                <Col md={6}>
                    <Form.Group>
                        <Form.Label>Rating (0–5)</Form.Label>
                        <Form.Control
                            className="dark-input"
                            type="number"
                            name="rating"
                            value={form.rating}
                            onChange={handleChange}
                            placeholder="e.g. 4.9"
                            min="0"
                            max="5"
                            step="0.1"
                        />
                    </Form.Group>
                </Col>

                <Col xs={12}>
                    <Form.Group>
                        <Form.Label>Description *</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            className="dark-input"
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            placeholder="Describe the dish..."
                            required
                            maxLength={400}
                        />
                    </Form.Group>
                </Col>

                <Col xs={12}>
                    <Form.Group>
                        <Form.Label>Image URL *</Form.Label>
                        <Form.Control
                            className="dark-input"
                            type="url"
                            name="image"
                            value={form.image}
                            onChange={handleChange}
                            placeholder="https://example.com/food.jpg"
                            required
                        />
                    </Form.Group>
                </Col>

                <Col xs={12}>
                    <Form.Check
                        className="featured-check"
                        type="checkbox"
                        name="featured"
                        checked={Boolean(form.featured)}
                        onChange={handleChange}
                        label="Show this dish in featured items"
                    />
                </Col>
            </Row>

            {error && (
                <p className="form-error mt-3" role="alert">
                    {error}
                </p>
            )}

            <div className="d-flex flex-wrap gap-2 mt-4">
                <Button type="submit" className="primary-button">
                    {selectedFood ? "Save changes ↗" : "Create food item ↗"}
                </Button>

                {selectedFood && (
                    <Button
                        type="button"
                        className="secondary-button"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                )}
            </div>
        </Form>
    );
}
