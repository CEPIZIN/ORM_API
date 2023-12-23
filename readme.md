# Backend Project  School System
## ORM API 
 The system manages entities such as categories, courses, people, and records. Developed in Node.js, the project uses Sequelize as the Object-Relational Mapping (ORM) tool for interacting with the database.

## Project Structure

The project is organized into various layers for ease of maintenance and scalability.

### 1. Models

Models represent the entities in the database. Each model is associated with a table in the database and defines the structure of the entity.

- **Category:** Represents a category for classifying courses.
- **Course:** Describes a course offered .
- **People:** Represents individuals associated with the system, such as students or teachers.
- **Register:** Records an individual's participation in a course.

### 2. Migrations

Migrations are responsible for defining the database structure. Each migration creates or alters tables as necessary.

### 3. Seeders

Seeders add initial data to the database to facilitate development and testing.

### 4. Services

Services contain the business logic for each entity. They interact directly with the models to perform operations on the database.

### 5. Controllers

Controllers handle HTTP requests. They call the corresponding services and return appropriate responses.

## API Routes

| Method | Endpoint                   | Description                      |
|--------|----------------------------|----------------------------------|
| GET    | `/api/course`              | Get all courses                  |
| PUT    | `/api/course/:id`          | Update course information        |
| GET    | `/api/category`            | Get all categories               |
| PUT    | `/api/category/:id`        | Update category information      |
| GET    | `/api/people`              | Get all people                   |
| GET    | `/api/people/:estudentId/matriculas` | Get registrations for a specific student |
| PUT    | `/api/people/:id`          | Update people informatio


