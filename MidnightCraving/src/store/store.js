import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

function loadCart() {
    try {
        const saved = localStorage.getItem("midnight-cart");
        return saved ? JSON.parse(saved) : { items: [] };
    } catch {
        return { items: [] };
    }
}

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: {
        cart: loadCart(),
    },
});

store.subscribe(() => {
    try {
        localStorage.setItem(
            "midnight-cart",
            JSON.stringify(store.getState().cart)
        );
    } catch (error) {
        console.error("Could not save cart:", error);
    }
});
