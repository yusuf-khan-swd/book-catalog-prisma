### Live Link: [Book Catalog Prisma](https://book-catalog-prisma.vercel.app)

### Application Routes:

#### User

```
customer_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOiJiODAyMTUwNi00YTY2LTRjYjItYTU3MS1kYTkxMDAxMjA3ZjkifQ.HijylmDoZzu54WTTwzcMIj7YJ6qkDxEy4tSHrjAIBus
```

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- api/v1/users (GET)
- api/v1/users/b8021506-4a66-4cb2-a571-da91001207f9 (Single GET) Include an id that is saved in your database
- api/v1/users/b8021506-4a66-4cb2-a571-da91001207f9 (PATCH)
- api/v1/users/34f5eb28-cd83-48c8-a490-b2b22271210f (DELETE) Include an id that is saved in your database
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
- api/v1/books/8eb51bd6-8456-4ee5-a80d-0f0c632bb85b/category (GET)
- api/v1/books/c65f5e41-d2d7-42aa-9dc7-1eea176a0acc (GET)
- api/v1/books/c65f5e41-d2d7-42aa-9dc7-1eea176a0acc (PATCH)
- api/v1/books/885242f0-64ce-43b2-87d5-ca0c35210458 (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/ddae912b-41b1-4d93-9ec3-6925c57b75da (GET)
