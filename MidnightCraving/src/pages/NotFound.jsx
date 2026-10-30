import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container className="section-space text-center">
            <div className="eyebrow">WRONG TURN</div>
            <h1 className="hero-title">
                Lost in the <span>dark?</span>
            </h1>
            <p className="muted-text">
                This page doesn't exist. Let's get you back to the good stuff.
            </p>
            <Button as={Link} to="/" className="primary-button">
                Back home ↗
            </Button>
        </Container>
    );
}
