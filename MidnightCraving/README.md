🌙 Midnight Cravings

Midnight Cravings is a premium, dark-themed food ordering website built with React and Vite. It features a modern UI with neon-orange accents, food photography, interactive food cards, a shopping cart, and an admin.

✨ Features
Home Page: Hero section, featured dishes, and call-to-action buttons.
Food Menu: Browse dishes, search by name, and filter by category.
Food Details: View individual dish information and add items to the cart.
Shopping Cart: Increase or decrease quantities, remove items, and clear the cart.
Automatic Bill Calculation: Calculate subtotal, with 5% gst, and total bill.
Admin: Create, read, update, delete, and search food records.
Form Validation: Validate required fields, prices, ratings, and image URLs.
Persistent Storage: Save food records and cart items using browser local storage.
React Router: Navigate between pages without reloading the entire application.
Redux Toolkit: Manage shared shopping cart state.
Custom Hook: Use a reusable useLocalStorage hook to persist food records.
Lifecycle Demonstration: Demonstrate component mounting, updating, and unmounting.
Responsive Design: Adapt the interface for desktop and mobile screens.

🛠️ Technologies Used
React
Vite
JavaScript
React Router DOM
Redux Toolkit
React Redux
React Bootstrap
Bootstrap CSS
HTML5 and CSS3
Browser Local Storage

📋 Prerequisites
Make sure you have the following installed:

Node.js (preferably a current LTS version)
npm (included with Node.js)
A code editor such as Visual Studio Code
🚀 How to Run the Project

1. Clone or download the project
   If the project is hosted on GitHub, clone it using:
   git clone <your-repository-url>
   Alternatively, download the project ZIP and extract it.

2. Open the project folder
   cd foodie-express

3. Install dependencies
   npm install

4. Start the development server
   npm run dev

5. Open the website
   Open the local URL displayed in the terminal. Vite typically uses:
   http://localhost:5173

The development server supports Hot Module Replacement (HMR), so changes appear in the browser as you edit your code.

📍 Application Pages
Page Route Description
Home - / Hero section and featured dishes
Menu - /menu Browse, search, and filter food
Food Details - /food/:id View details of a selected dish
Cart - /cart Manage quantities and calculate the bill
Admin - /manage Manage food records
Not Found - Any invalid route Display a custom error page

Example food details URL:
http://localhost:5173/food/a7f3c921-8b64-4d0e-9f12-6c5e8a1b3d70

💾 Data Storage
The application uses browser local storage to persist data between page refreshes.
midnight-foods: Stores food records.
midnight-cart: Stores shopping cart items.
The data is stored in the current browser and is not synchronized with a server or database.

🧪 Build for Production
To create a production build, run:
npm run build

To preview the production build locally, run:
npm run preview

⚠️ Project Limitations
This is a demonstration project and does not use a backend database.
Checkout is simulated; no real payments are processed.
The admin page does not include authentication.
Food photography and externally hosted fonts require an internet connection.
The tax rate is illustrative and is not intended to represent actual tax advice.

👨‍💻 Project Purpose
This project demonstrates React fundamentals, routing, state management, CRUD operations, form validation, reusable components, custom hooks, local storage, and responsive UI design.

Midnight Cravings — Good food. Late nights. Zero compromises. 🍔
