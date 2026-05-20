# Mini Banking Frontend

A modern, responsive, and secure home banking frontend application built with the Angular framework. This project serves as the user interface for the [mini-banking-api](http) backend, which is powered by the PHP Slim framework.

## 🚀 Key Features

*   **Transaction Management**: Interactive forms to perform wire transfers and mobile top-ups with real-time data validation.
*   **Transaction History**: A searchable history list filterable by date, category (e.g., expenses, income), and text keywords.

--

## 🛠️ Tech Stack

*   **Framework**: Angular (v17+)
*   **Styling & UI**: --
*   **Backend Integration**: HttpClient modules communicating with PHP Slim API endpoints

## 📦 Prerequisites

Before running the application, ensure you have the following installed:

*   [Node.js](https://nodejs.org) (LTS version recommended)
*   [Angular CLI](https://angular.io) (`npm install -g @angular/cli`)
*   Running instance of the [mini-banking-api](https://github.com/andreygonza77/mini-banking-api.git) backend.

## 🔧 Installation & Setup

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/andreygonza77 mini-banking-frontend.git
    cd mini-banking-frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure the Backend URL**
    
    Follow the backend repository instructions

4.  **Start the development server**
    ```bash
    ng serve
    ```

5.  **Open the app**
    Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## 🌐 API Interaction Notes

This frontend expects the PHP Slim backend to provide standard RESTful endpoints. Ensure your `mini-banking-api` instance is up, running, and has **CORS enabled** to allow requests coming from `http://localhost:4200`.

