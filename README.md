# 🛒 Product Management System

Product Management System is a Node.js application designed to facilitate product management with essential CRUD functionalities. The system allows users to manage product details with capabilities to create, view, update, and delete product entries. It is built using Express.js, EJS, and MySQL.

## Features

- **🆕 Create**: Add new products to the database.
- **📄 Read**: View a list of products and their details.
- **✏️ Update**: Edit product information (Admin only).
- **🗑️ Delete**: Remove products from the list (Admin only).

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **EJS**: Templating engine for rendering dynamic HTML views.
- **MySQL**: Relational database management system for data storage.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/product-management-system.git
   cd product-management-system


API Testing
Use Postman for API testing to interact with and test the application's endpoints.

## Project Structure

```plaintext
.
├── app.js                # Main application file
├── controllers
│   ├── admin.js           # Controller for admin actions
│   └── user.js            # Controller for user actions
├── models
│   └── products.js        # Product model for database operations
├── routes
│   ├── admin.js           # Routes for admin functionalities
│   └── user.js            # Routes for user functionalities
├── views
│   ├── form.ejs           # Form view for product input
│   └── product_list.ejs   # View for displaying products
├── utils
│   └── database.js        # Database connection utility
└── README.md              # Project documentation



## Install dependencies:

bash
Copy code
npm install
Configure the database:

Edit utils/database.js with your MySQL credentials. Ensure your database and product table are set up correctly.

Start the application:

bash
Copy code
npm start
Navigate to http://localhost:3000 in your browser to use the application.

