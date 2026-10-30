import { useMemo, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import FoodCard from "../components/FoodCard";

export default function FoodMenu({ foods }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const categories = useMemo(
        () => ["All", ...new Set(foods.map((food) => food.category))],
        [foods]
    );

    const filteredFoods = foods.filter((food) => {
        const matchesName = food.name
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesCategory =
            category === "All" || food.category === category;

        return matchesName && matchesCategory;
    });

    return (
        <Container className="section-space">
            <div className="menu-intro">
                <div className="eyebrow">THE GOOD STUFF</div>
                <h1>
                    Menu
                </h1>
                <p>Explore the lineup. Find your new obsession.</p>
            </div>

            <div className="menu-toolbar">
                <Form.Control
                    type="search"
                    className="dark-input search-input"
                    placeholder="⌕   Search your cravings..."
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    aria-label="Search food by name"
                />

                <Form.Select
                    className="dark-input category-select"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    aria-label="Filter food by category"
                >
                    {categories.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </Form.Select>
            </div>

            <div className="results-line">
                <span>OUR SELECTION</span>
                <span>{filteredFoods.length} dishes</span>
            </div>

            <Row className="g-4">
                {filteredFoods.map((food) => (
                    <Col key={food.id} xs={12} sm={6} lg={4}>
                        <FoodCard food={food} />
                    </Col>
                ))}
            </Row>

            {filteredFoods.length === 0 && (
                <div className="empty-state">
                    <span>⌕</span>
                    <h3>No cravings found.</h3>
                    <p>Try another search or category.</p>
                </div>
            )}
        </Container>
    );
}
