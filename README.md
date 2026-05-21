# Mini Banking Frontend

A modern, responsive, and secure home banking frontend application built with the **Angular** framework. This school project provides a comprehensive user interface for personal finance management, integrating with a backend API for real-time transactions.

## 🚀 Key Features

*   **Financial Dashboard**: Real-time balance tracking and overview of financial health.
*   **Transaction Management**: 
    *   **Deposits & Withdrawals**: Secure forms to manage funds.
    *   **Currency Conversion**: Integrated tools for both **Fiat** and **Crypto** conversions.
*   **Movement History**: Detailed list of all transactions with specific view for individual movement details.
*   **User Authentication**: Secure login flow to protect financial data.
*   **Modern UI**: Fully responsive design with **Dark Mode** support and smooth animations.

## 🛠️ Tech Stack

*   **Framework**: Angular
*   **Styling**: 
    *   **Vanilla CSS**: Modular stylesheets per component.
    *   **CSS Variables**: Centralized theme management for consistent colors and spacing.
    *   **Dark Mode**: Native implementation using CSS variable overrides.
*   **Backend**: PHP Slim

## 📦 Prerequisites

Before running the application, ensure you have the following installed:

*   [Node.js](https://nodejs.org) 
*   [Angular CLI](https://angular.io) (`npm install -g @angular/cli`)
*   Running instance of the [mini-banking-api](https://github.com/andreygonza77/mini-banking-api.git) backend.

## 🔧 Installation & Setup

Follow these steps to set up the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/andreygonza77/mini-banking-frontend.git
    cd mini-banking-frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm start
    ```

4.  **Open the app**
    Navigate to `http://localhost:4200/` in your browser.

## 🌐 API Interaction

This frontend communicates with a PHP Slim backend. Ensure your API instance is running and has **CORS enabled** to allow requests from `http://localhost:4200`. For local development, a `proxy.conf.json` is configured to handle API routing.

## 👤 How to Log In

To log into a bank account is required an Account ID and a password. The Account ID is the actual id of the account in the table "accounts", while the password is the "created_at" value. 

