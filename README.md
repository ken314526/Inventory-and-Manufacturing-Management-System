# Inventory and Manufacturing Management System

Welcome to the Inventory and Manufacturing Management System, a web application designed to streamline inventory tracking and manufacturing processes.

## Table of Contents
- [Introduction](#introduction)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)

## Introduction

This application helps businesses manage their inventory and manufacturing operations efficiently. It provides functionalities such as:
- Inventory tracking
- Order management
- Manufacturing process monitoring
- Reporting and analytics

## Setup

To run this application locally, follow the steps below:

### Backend Setup

1. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   FRONTEND_URL=http://localhost:3000
   MONGOD_URL=<mongodb_connection_url>
   ```
   Replace `<mongodb_connection_url>` with your MongoDB connection URL.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```
   The backend server will run on `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend development server will run on `http://localhost:3000`.

## Technologies Used

- Next.JS
- Node.JS
- Express.JS
- MongoDB
- Tailwind CSS

## Getting Started

To start using the application:
- Access the frontend at `http://localhost:3000` in your web browser.
- Ensure the backend server is running at `http://localhost:8080`.