import { useState } from "react";
import {
    Container,
    Row,
    Col,
    Table,
    Button,
    Form,
    Badge,
} from "react-bootstrap";
import FoodForm from "../components/FoodForm";

export default function ManageFood({
    foods,
    onSave,
    onDelete,
}) {
    const [selectedFood, setSelectedFood] = useState(null);
    const [search, setSearch] = useState("");

    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    const handleSave = (food) => {
        onSave(food);
        setSelectedFood(null);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this dish?")) {
            onDelete(id);

            if (selectedFood?.id === id) {
                setSelectedFood(null);
            }
        }
    };

    return (
        <Container className="section-space">
            <div className="eyebrow">CONTROL ROOM</div>
            <h1 className="page-title">
                Food management
            </h1>
            <p className="muted-text">
                Manage your menu, update prices and add new favorites.
            </p>

            <Row className="g-4 mt-2">
                <Col lg={5}>
                    <div className="admin-panel">
                        <div className="panel-heading">
                            <div>
                                <div className="eyebrow">
                                    {selectedFood ? "UPDATE RECORD" : "NEW RECORD"}
                                </div>
                                <h3>
                                    {selectedFood ? "Edit dish" : "Add a dish"}
                                </h3>
                            </div>

                            <span className="panel-icon">＋</span>
                        </div>

                        <FoodForm
                            selectedFood={selectedFood}
                            onSave={handleSave}
                            onCancel={() => setSelectedFood(null)}
                        />
                    </div>
                </Col>

                <Col lg={7}>
                    <div className="admin-panel">
                        <div className="panel-heading">
                            <div>
                                <div className="eyebrow">YOUR MENU</div>
                                <h3>Food records</h3>
                            </div>

                            <Badge bg="dark" className="record-count">
                                {foods.length} items
                            </Badge>
                        </div>

                        <Form.Control
                            className="dark-input mb-3"
                            type="search"
                            placeholder="Search food records..."
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />

                        <Table responsive className="dark-table align-middle">
                            <thead>
                                <tr>
                                    <th>Dish</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredFoods.map((food) => (
                                    <tr key={food.id}>
                                        <td>
                                            <div className="admin-food-cell">
                                                <img src={food.image} alt="" />
                                                <div>
                                                    <strong>{food.name}</strong>
                                                    <small>{food.category}</small>
                                                </div>
                                            </div>
                                        </td>

                                        <td>₹{Number(food.price).toFixed(2)}</td>

                                        <td>
                                            <div className="d-flex gap-2">
                                                <Button
                                                    size="sm"
                                                    className="edit-button"
                                                    onClick={() => {
                                                        setSelectedFood(food);
                                                        window.scrollTo({
                                                            top: 0,
                                                            behavior: "smooth",
                                                        });
                                                    }}
                                                >
                                                    Edit
                                                </Button>

                                                <Button
                                                    size="sm"
                                                    className="delete-button"
                                                    onClick={() => handleDelete(food.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                                {filteredFoods.length === 0 && (
                                    <tr>
                                        <td colSpan={3} className="text-center py-4">
                                            No matching records.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
