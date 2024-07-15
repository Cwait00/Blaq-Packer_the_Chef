Blaq-Packer_the_Chef

Blaq-Packer_the_Chef is a backend application designed to support a
personal chef service, allowing clients to book services, view menus,
and place orders with quick response times. This project integrates
with the Adalo platform to build a comprehensive app for users.

Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
  - [User Authentication](#user-authentication)
  - [Menu Management](#menu-management)
  - [Order Processing](#order-processing)
  - [Payment Processing](#payment-processing)
- [Usage](#usage)
- [License](#license)  

Features
- User Registration and Authentication
- Menu Management
- Order Processing
- Payment Processing with Stripe

Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Bcrypt.js
- Stripe
- dotenv

Getting Started

Prerequisites
- Node.js (version 16.x)
- MongoDB instance (cloud)

Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/Blaq-Packer_the_Chef.git
    cd Blaq-Packer_the_Chef
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Environment Variables
Create a `.env` file in the root directory and add the following environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
