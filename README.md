# SQL Connection Learning Project

This project is a simple full-stack application demonstrating how to connect a Next.js frontend to an Express backend, which in turn interacts with a MySQL database.

## Project Structure

- `backend/`: Express server written in TypeScript.
- `frontend/`: Next.js application using Tailwind CSS and React Query.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [MySQL](https://www.mysql.com/) server

## Setup Instructions

### 1. Database Setup
Create a MySQL database and a table named `items`:

```sql
CREATE DATABASE test;
USE test;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

INSERT INTO items (name, description) VALUES ('Item 1', 'Description 1'), ('Item 2', 'Description 2');
```

### 2. Environment Variables
Create a `.env` file in the `backend/` directory:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=test
PORT=8000
```

### 3. Installation

Install dependencies for both backend and frontend:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Running the Application

You need to run both the backend and frontend servers simultaneously.

### Start the Backend
```bash
cd backend
npm run dev
```
The server will start on [http://localhost:8000](http://localhost:8000).

### Start the Frontend
```bash
cd frontend
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000).

## Features
- **Data Fetching**: The frontend fetches data from the Express backend using React Query.
- **ESM Support**: The backend is configured to use ECMAScript Modules (ESM).
- **TypeScript**: Both frontend and backend are written in TypeScript for type safety.
