import { Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FoodMenu from "./pages/FoodMenu";
import FoodDetails from "./pages/FoodDetails";
import Cart from "./pages/Cart";
import ManageFood from "./pages/ManageFood";
import NotFound from "./pages/NotFound";

import initialFoods from "./data/initialFoods";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const [foods, setFoods] = useLocalStorage(
    "midnight-foods",
    initialFoods
  );

  const saveFood = (food) => {
    setFoods((previous) => {
      const exists = previous.some(
        (item) => item.id === food.id
      );

      return exists
        ? previous.map((item) =>
          item.id === food.id ? food : item
        )
        : [...previous, food];
    });
  };

  const deleteFood = (id) => {
    setFoods((previous) =>
      previous.filter((food) => food.id !== id)
    );
  };

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home foods={foods} />}
          />

          <Route
            path="/menu"
            element={<FoodMenu foods={foods} />}
          />

          <Route
            path="/food/:id"
            element={<FoodDetails foods={foods} />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route
            path="/manage"
            element={
              <ManageFood
                foods={foods}
                onSave={saveFood}
                onDelete={deleteFood}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <Container className="footer-inner">
          <Link to="/" className="footer-brand">
            MIDNIGHT<span> CRAVINGS.</span>
          </Link>

          <p>
            Made for late nights and serious appetites.
          </p>

          <small>© 2026 Midnight Cravings</small>
        </Container>
      </footer>
    </div>
  );
}
