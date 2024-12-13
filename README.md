<h1 align="center">User Database CRUD Operations with TypeORM and PostgreSQL</h1>

## Introduction

This project is a backend application built with Node.js, Express, and TypeScript. It enables CRUD operations on a PostgreSQL database using TypeORM. It is designed to manage user data, supporting creation, reading, updating, and deletion of records.

## 🔬 Project Structure

The project is organized as follows:

- **src**: Contains the application's source code.
  - **app.ts**: Main server configuration.
  - **db.ts**: Database connection configuration.
  - **routes**: Defines server routes.
  - **controllers**: Business logic for handling requests.
  - **entities**: Database table definitions.
- **dist**: Contains transpiled code ready for production.

## 📐 Architecture

The project follows a modular and scalable architecture:

- **Entities**: Used to model database tables.
- **Controllers**: Contain business logic and handle incoming requests.
- **Routes**: Define the API REST endpoints.
- **Data Source**: Configures and manages the PostgreSQL database connection.

## 🔨 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/IgnaLog/typeorm-crud-restapi.git
cd typeorm-crud-restapi
```

### 2. Install Dependencies

Ensure Node.js is installed on your system. Then, run:

```bash
npm install
```

### 3. Configure the Database

Edit the `src/db.ts` file with your PostgreSQL credentials:

```bash
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your_username",
  password: "your_password",
  database: "database_name",
  entities: [User],
  synchronize: true,
});
```

### 4. Run the Application

#### Development Mode

To start the development environment, run:

```bash
npm run dev
```

This will start the server at `http://localhost:3000`.

```bash
Production Mode
```

To build and run the application in production mode:

```bash
npm run build
npm start
```

## 📮 Endpoints

### User Routes

- Create User

  `POST /users`

  Body:

  ```bash
  {
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com"
  }
  ```

- Get All Users

  `GET /users`

- Get User by ID

  `GET /users/:id`

- Update User

  `PUT /users/:id`

  Body:

  ```bash
  {
  "firstname": "Jane",
  "lastname": "Smith"
  }
  ```

- Delete User

  `DELETE /users/:id`
