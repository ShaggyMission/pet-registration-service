# 🐾 Pet Registration Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</div>

<div align="center">
  <h3>🚀 Secure Pet Registration Microservice for Pet Rescue Platform</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Bringing rescue pets into the system for better care! 🐾</em></p>
</div>

---

## 🌟 Overview

The **Pet Registration Service** is a core microservice in the Shaggy Mission platform that handles the registration and management of rescue pets. This service enables shelters, volunteers, and rescue organizations to register new pets into the system with comprehensive health and location information for better adoption coordination.

## 🎯 What This Service Does

- **Pet Registration**: Creates new pet profiles with detailed information
- **Data Validation**: Ensures pet data integrity with Mongoose schema validation
- **Health Status Tracking**: Monitors pet health conditions with standardized statuses
- **Image Management**: Supports multiple pet photos for better adoption visibility
- **Location Tracking**: Records pet locations for regional rescue coordination
- **CORS Support**: Enables cross-origin requests for frontend integration

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB with Mongoose ODM for data modeling
- **Documentation**: Swagger UI with YAML configuration
- **CORS**: Cross-Origin Resource Sharing for API accessibility
- **Environment**: dotenv for secure configuration management
- **Architecture**: Layered architecture with controllers, services, and repositories

## 📡 API Endpoints

### Pet Registration Endpoint
**`POST /pets/register`**
- Registers a new pet in the rescue system
- Validates required fields and data types
- Returns complete pet profile with generated timestamps
- Supports comprehensive pet information including health status

**Request Body:**
```json
{
  "name": "Buddy",
  "breed": "Golden Retriever",
  "age": 3,
  "healthStatus": "Good",
  "description": "Friendly and energetic dog looking for a loving home",
  "location": "Downtown Animal Shelter",
  "images": [
    "https://example.com/pet-photo-1.jpg",
    "https://example.com/pet-photo-2.jpg"
  ]
}
```

**Success Response (201):**
```json
{
  "_id": "64f8a1b2e4b0f1a2c3d4e5f6",
  "name": "Buddy",
  "breed": "Golden Retriever",
  "age": 3,
  "healthStatus": "Good",
  "description": "Friendly and energetic dog looking for a loving home",
  "location": "Downtown Animal Shelter",
  "images": [
    "https://example.com/pet-photo-1.jpg",
    "https://example.com/pet-photo-2.jpg"
  ],
  "createdAt": "2024-09-06T10:30:45.123Z",
  "updatedAt": "2024-09-06T10:30:45.123Z"
}
```

**Error Response (500):**
```json
{
  "error": "Pet validation failed: name is required"
}
```

### API Documentation Endpoint
**`GET /register/pets-docs`**
- Interactive Swagger UI documentation
- Complete API specification with request/response examples
- Built-in testing interface for registration operations

## 🔧 Core Functionality

### Pet Registration Process
The service handles comprehensive pet registration through a structured process that validates incoming pet data against the Mongoose schema, creates a new pet document with all provided information, saves the pet to MongoDB with automatic timestamp generation, handles validation errors and provides meaningful feedback, and returns the complete pet profile including generated metadata.

### Data Validation & Schema
The Pet model enforces data integrity through Mongoose schema validation with required name field, optional breed and description fields, age validation with minimum value of 0, health status enumeration with predefined values (Good, Fair, Delicate), location tracking for rescue coordination, and support for multiple image URLs in an array format.

### Layered Architecture
The service implements a clean layered architecture separating concerns across controller layer for HTTP request handling, service layer for business logic processing, repository layer for database operations, and model layer for data structure definition. This architecture ensures maintainability and testability.

## 🌐 Service Integration

This microservice serves as the foundation for pet management in the Shaggy Mission platform, providing pet registration capabilities that integrate with adoption services, medical tracking systems, and volunteer coordination tools. The service runs on port 3006 and connects to MongoDB Atlas for reliable data storage.

## 🔒 Security Features

- **Input Validation**: Mongoose schema validation prevents invalid data entry
- **CORS Configuration**: Controlled cross-origin access for authorized applications
- **Environment Variables**: Secure database connection string management
- **Error Handling**: Sanitized error responses without sensitive information
- **Data Integrity**: Schema constraints ensure consistent pet data format

## 🗃️ Database Operations

The service performs MongoDB operations through Mongoose ODM, utilizing automatic document validation, timestamp generation for created and updated dates, efficient document creation and storage, and connection pooling for optimal performance. The database is hosted on MongoDB Atlas with connection string management through environment variables.

## 📊 Health Status Management

The service includes a comprehensive health status tracking system with three predefined statuses: Good for healthy pets ready for adoption, Fair for pets with minor health considerations, and Delicate for pets requiring special medical attention. This system helps match pets with appropriate adopters and care facilities.

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Every pet registered is a step closer to finding their forever home!</em></p>
</div>
