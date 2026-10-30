import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import LifecycleDemo from "../components/LifecycleDemo";

export default function Home({ foods }) {
    const featured = foods.filter((food) => food.featured).slice(0, 3);

    return (
        <>
            <section className="hero-section">
                <Container>
                    <Row className="align-items-center gy-5">
                        <Col lg={6}>
                            <div className="eyebrow">
                                <span className="pulse-dot" />
                                YOUR LATE-NIGHT CRAVING PARTNER
                            </div>

                            <h1 className="hero-title">
                                Cravings
                                <br />
                                don't <span>sleep.</span>
                            </h1>

                            <p className="hero-description">
                                Big flavors. Fresh ingredients. Zero compromises.
                                Your next favorite meal is just a few clicks away.
                            </p>

                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <Button
                                    as={Link}
                                    to="/menu"
                                    className="primary-button"
                                >
                                    Explore Menu
                                </Button>

                                <Button
                                    as={Link}
                                    to="/menu"
                                    className="secondary-button"
                                >
                                    Discover flavors
                                </Button>
                            </div>

                            <div className="hero-stats">
                                <div>
                                    <strong>20+</strong>
                                    <span>Food choices</span>
                                </div>
                                <div>
                                    <strong>4.8/5</strong>
                                    <span>Sample rating</span>
                                </div>
                                <div>
                                    <strong>100%</strong>
                                    <span>Made with love</span>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <div className="hero-visual">
                                <div className="hero-glow" />

                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200"
                                    alt="Gourmet cheeseburger"
                                    className="hero-food-image"
                                />

                                <div className="hero-image-label">
                                    <span className="label-dot" />
                                    <div>
                                        <small>TONIGHT'S PICK</small>
                                        <strong>Midnight Smash Burger</strong>
                                    </div>
                                    <strong className="label-price">₹199</strong>
                                </div>

                                <div className="hero-floating-badge">
                                    <span>✦</span>
                                    Seriously delicious
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="section-space">
                <div className="section-heading">
                    <div>
                        <div className="eyebrow">THE CROWD FAVORITES</div>
                        <h2>
                            Hits different
                        </h2>
                        <p>Our favorites, picked for your next craving.</p>
                    </div>

                    <Button
                        as={Link}
                        to="/menu"
                        className="secondary-button"
                    >
                        View all dishes
                    </Button>
                </div>

                <Row className="g-4">
                    {featured.map((food) => (
                        <Col key={food.id} xs={12} sm={6} lg={4}>
                            <FoodCard food={food} />
                        </Col>
                    ))}
                </Row>

                {featured.length === 0 && (
                    <p className="muted-text">
                        No featured dishes yet. Add some from the Admin page.
                    </p>
                )}
            </Container>

            <section className="experience-section">
                <Container>
                    <Row className="align-items-center gy-4">
                        <Col md={8}>
                            <div className="eyebrow">MADE FOR YOUR MOOD</div>
                            <h2>Good food. No boring bites.</h2>
                            <p>
                                From juicy burgers to cheesy pizza and sweet endings,
                                find something worth staying up for.
                            </p>
                        </Col>
                        <Col md={4} className="text-md-end">
                            <Button as={Link} to="/menu" className="primary-button">
                                Find your favorite →
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container className="section-space">
                <LifecycleDemo />
            </Container>
        </>
    );
}
