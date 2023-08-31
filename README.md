### Live Link: https://example.com

### Application Routes:

#### User

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/ad1fea33-51ba-40c4-b781-f0d81b1a37fb (Single GET) Include an id that is saved in your database
- api/v1/users/ad1fea33-51ba-40c4-b781-f0d81b1a37fb (PATCH)
- api/v1/users/13e4fe75-8cbe-4be9-86ec-897d33c40ff9 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/8eb51bd6-8456-4ee5-a80d-0f0c632bb85b (Single GET) Include an id that is saved in your database
- api/v1/categories/8eb51bd6-8456-4ee5-a80d-0f0c632bb85b (PATCH)
- api/v1/categories/b3cb01af-5cde-4e5f-b89a-50fb55a76d29 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)
