# ShoppyGlobe E-commerce API

## Project Overview

Backend API for ShoppyGlobe application built using Node.js, Express, and MongoDB. This API allows users to manage products, handle shopping cart functionality, and implement user authentication through JWT (JSON Web Tokens).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing-with-thunderclient)

## Features

- User registration and login with JWT authentication
- Product management (CRUD operations)
- Shopping cart functionality (add, update, delete products)
- Input validation and error handling

## Installation

1. **Clone the Repository**:

   git clone https://github.com/

   * You can also download this as a Zipfile by clicking on "<>Code" button/options. 

2. **Install Dependencies**:open terminal in root directory & run following command.

    npm install

    *A  folder named <node_modules> will created having all packages install to run this Backend Api.

3. **Environment Variables**: Create a .env file in the root directory and add your MongoDB connection string:

    MongoDB_URL = "<Paste_here : MongoDB Compass or MongoDB Atlas Connection String/URL in double-qoute  like (e.g.,"mongodb://localhost:27017")>"
    Jwt_secret_key = "<create a plaintext_key in double-qoute like (e.g.,"MySecretKey123")>"
    PORT = <4-digit number(e.g.,5000)>

4. Run the Application:open terminal in root directory & run any one of following command.

    npm start || npm run start|| nodemon server.js/ || node server.js/

5. The API should be running on http://localhost:PORT.NO.

## Usage

The API has various endpoints that can be used to interact with the application.

## Testing with ThunderClient or Postman.

 **Use ThunderClient or Postman to test the API endpoints**:

    - User Registration: Test the registration endpoint with valid user data.
    - User Login: Use the login endpoint to get a JWT token.
    - Product Operations: Test adding, fetching, updating, and deleting products.
    - Cart Operations: Test adding to the cart, updating quantities, and deleting items from the cart.