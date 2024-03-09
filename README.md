# Products Management System

Welcome to the nerve center of a comprehensive product management system! This repository meticulously houses the source code for a full-stack application that empowers users to effortlessly manage product data.

## Components:

### ASP.NET Core Web API (Products):
- This component serves as the backend of the application.
- Built using ASP.NET Core framework, version 8.
- Implements RESTful API endpoints to handle CRUD operations for managing products.
- Utilizes controllers to route incoming requests and interact with the data layer.
- Includes model classes to represent product entities and data transfer objects (DTOs) for request and response payloads.
- Establishes a database connection to store and retrieve product information.

### Angular 17:
- This component serves as the frontend of the application.
- Developed using Angular framework, version 17.
- Provides a dynamic and responsive user interface for interacting with the product data.
- Implements various components, services, and modules to structure and manage the frontend logic.
- Utilizes HTTP client module to communicate with the backend API and fetch/update product data.
- Implements features such as product listing, creation, editing, and deletion.

## Getting Started

To embark on your product management journey, ensure you have the following prerequisites in place:

- **.NET 8:** Download and install the latest .NET 8 SDK from [here](https://dotnet.microsoft.com/en-us/download) to empower your backend development.
- **Node.js and npm (or yarn):** Download and install Node.js (which includes npm) from [here](https://nodejs.org/en) to provide the foundation for your frontend development.

## Setting Up Your Development Environment

1. **Clone the Repository:**
git clone https://github.com/Mazharul-DotnetDev/AngularCRUDwithProductsAPI.git
2. **Restore Dependencies:**
- ASP.NET Core Web API: `dotnet restore`
- Angular Application: `npm install`

## Running the Application

- **ASP.NET Core Web API:** `dotnet run`
- **Angular Application:** `ng serve`

## Contributing:

Contributions to this project are welcome. To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository for review.
