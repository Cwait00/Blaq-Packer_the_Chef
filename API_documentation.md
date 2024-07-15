## API Endpoints

### User Authentication

- **POST /api/auth/register**
  - Description: Register a new user.
  - Request Body:
    ```json
    {
      "username": "testuser",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "userId",
        "username": "testuser"
      }
    }
    ```

- **POST /api/auth/login**
  - Description: Login a user.
  - Request Body:
    ```json
    {
      "username": "testuser",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "token": "jwtToken",
      "user": {
        "id": "userId",
        "username": "testuser"
      }
    }
    ```

### Menu Management

- **GET /api/menus**
  - Description: Get all menus.
  - Response:
    ```json
    [
      {
        "id": "menuId",
        "name": "Menu Name",
        "items": [...]
      }
    ]
    ```

### Order Processing

- **POST /api/orders**
  - Description: Create a new order.
  - Request Body:
    ```json
    {
      "menuId": "menuId",
      "quantity": 2
    }
    ```
  - Response:
    ```json
    {
      "message": "Order created successfully",
      "order": {
        "id": "orderId",
        "menuId": "menuId",
        "quantity": 2
      }
    }
    ```

### Payment Processing

- **POST /api/payment**
  - Description: Process a payment.
  - Request Body:
    ```json
    {
      "amount": 5000,
      "paymentMethodId": "pm_card_visa"
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "paymentIntent": {...}
    }
    ```
