🌙 Midnight Cravings
Good Food. Late Nights. Zero Compromises. 🍔

Midnight Cravings is a premium, dark-themed food ordering web application built using React and Vite. It features a modern user interface with neon-orange accents, attractive food photography, interactive food cards, a shopping cart, and an admin dashboard for managing food records.

This project demonstrates essential React concepts, including component-based architecture, routing, state management, CRUD operations, form validation, custom hooks, and browser Local Storage.

✨ Features <br />
🏠 Home Page <br />
Attractive hero section with a modern dark-themed design. <br />
Featured food items and popular dishes. <br />
Call-to-action buttons for easy navigation. <br />

🍕 Food Menu <br />
Browse all available food items. <br />
Search food items by name. <br />
Filter food items by category. <br />
Interactive and responsive food cards. <br />

🍔 Food Details <br />
View individual food item details. <br />
Display food information, ratings, prices, and images. <br />
Add selected food items to the shopping cart. <br />

🛒 Shopping Cart <br />
Increase or decrease food quantities. <br />
Remove individual items from the cart. <br />
Clear all cart items. <br />
Automatically update cart totals. <br />

💰 Automatic Bill Calculation <br />
Calculate subtotal based on selected food items. <br />
Automatically calculate 5% GST. <br />
Display the final bill, including tax. <br />

⚙️ Admin Page <br />
Create new food records. <br />
Read and display existing food records. <br />
Update food information. <br />
Delete food records. <br />
Search food items. <br />
Manage food data through an admin interface. <br />

✅ Form Validation <br />
Validate required form fields. <br />
Validate food prices. <br />
Validate ratings. <br />
Validate image URLs. <br />
Display appropriate validation messages. <br />

💾 Persistent Storage <br />
Store food records using browser Local Storage. <br />
Persist shopping cart items across page refreshes. <br />
Maintain data in the user's current browser. <br />

🔄 React Lifecycle Demonstration <br />
Demonstrate component mounting. <br />
Demonstrate component updating. <br />
Demonstrate component unmounting. <br />

📱 Responsive Design <br />
Mobile-friendly interface. <br />
Responsive layouts for desktop, tablet, and mobile devices. <br />
Modern UI with neon-orange accents and dark backgrounds. <br />

🛠️ Technologies Used <br />
Technology	Purpose <br />
React	Frontend UI development <br />
Vite	Development server and build tool <br />
JavaScript	Application logic <br />
React Router DOM	Client-side navigation <br />
Redux Toolkit	Shopping cart state management <br />
React Redux	Connecting React components to Redux <br />
React Bootstrap	UI components <br />
Bootstrap CSS	Styling and responsive layouts <br />
HTML5	Application structure <br />
CSS3	Custom styling and animations <br />
Browser Local Storage	Persistent data storage <br />

📋 Prerequisites <br />
Before running the project, make sure you have the following installed:

Node.js (preferably the latest LTS version), 
npm (included with Node.js), 
Visual Studio Code or any other code editor and
A modern web browser

Verify your Node.js and npm installations:

bash
node -v
npm -v

🚀 How to Run the Project

Follow these steps to run Midnight Cravings locally.

1. Clone or Download the Repository
Clone the project using Git:
```bash
git clone https://github.com/ShahKrishi/MidnightCraving.git
```
Alternatively, download the repository as a ZIP file and extract it.

2. Navigate to the Project Folder
```bash
cd MidnightCraving
```

3. Install Dependencies
```bash
npm install
```

4. Start the Development Server
```bash
npm run dev
```

5. Open the Application
Once the development server starts, open the local URL displayed in your terminal.
By default, Vite typically runs the application at:
```bash
http://localhost:5173
```

Note: Vite supports Hot Module Replacement (HMR), which automatically updates the application in the browser whenever you make changes to the source code.

📍 Application Pages and Routes

The application contains the following pages:

Page	Route	Description <br />
Home -	/	Hero section and featured dishes <br />
Menu	- /menu	Browse, search, and filter food items <br />
Food - Details	/food/:id	View details of a selected food item <br />
Cart	- /cart	Manage cart items and calculate the bill <br />
Admin	- /manage	Create, update, delete, and search food records <br />
Not Found	*	Display a custom error page for invalid routes <br />

Example Food Details URL
http://localhost:5173/food/a7f3c921-8b64-4d0e-9f12-6c5e8a1b3d70

💾 Data Storage

Midnight Cravings uses the browser's Local Storage API to persist application data between page refreshes.

Local Storage Keys <br />
Local Storage Key	Description <br />
midnight-foods	Stores food records <br />
midnight-cart	Stores shopping cart items <br />

How It Works <br />
Food records are saved in the browser's Local Storage. <br />
Shopping cart items remain available after refreshing the page. <br />
Data is stored locally in the current browser. <br />
No external database or backend server is required. <br />

Important: Local Storage data is specific to the browser and device. It is not automatically synchronized across different devices or browsers.

⚠️ Project Limitations
Please note the following limitations:
This is a demonstration project and does not use a backend database. <br />
All food records and cart data are stored in browser Local Storage. <br />
Checkout functionality is simulated. <br />
No real payment transactions are processed. <br />
The admin dashboard does not include authentication. <br />
Food photography and externally hosted fonts require an internet connection. <br />
The 5% GST rate is illustrative and is not intended to represent actual tax advice. <br />

🎯 Project Purpose <br />
The main purpose of Midnight Cravings is to demonstrate the practical implementation of modern React concepts and frontend development skills. <br />

This project covers:
React fundamentals and component-based architecture. <br />
React Router DOM for navigation. <br />
Redux Toolkit for global state management. <br />
CRUD (Create, Read, Update, Delete) operations. <br />
Form validation and controlled components. <br />
Reusable React components. <br />
Custom React hooks. <br />
Browser Local Storage integration. <br />
React component lifecycle. <br />
Responsive web design. <br />
Vite development and production builds. <br />

🌟 Future Enhancements <br />
Possible improvements for future versions include: <br />
Backend API integration. <br />
Database connectivity. <br />
User registration and login. <br />
Admin authentication and authorization. <br />
Real payment gateway integration. <br />
Order history and order tracking. <br />
User profile management. <br />
Wishlist functionality. <br />

👨‍💻 Developer Note
Midnight Cravings is developed as a frontend demonstration project to showcase React development skills, modern UI design, state management, and interactive application functionality.

<div align="center">

🌙 Midnight Cravings
Good Food. Late Nights. Zero Compromises. 🍔

Made with ❤️ using React and Vite.

</div>
