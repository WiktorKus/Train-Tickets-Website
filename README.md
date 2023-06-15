# Train-Tickets-Website

This API provides endpoints for managing train tickets and related operations.

## Authentication

### Register User

Register a new user.

**Endpoint:** POST /api/v1/auth/register

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "secretpassword"
}
```
Response:
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Authenticate User

Authenticate and obtain access and refresh tokens.

**Endpoint:** `POST /api/v1/auth/authenticate`

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "secretpassword"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Refresh Access Token

Refresh the access token using the refresh token.

**Endpoint:** `POST /api/v1/auth/refresh-token`

**Request Body:**
No request body required.

**Response:**
No response body. The response contains the refreshed access token in the response headers.

### Ticket Management

#### Get All Tickets

Retrieve a list of all tickets.

**Endpoint:** `GET /api/v1/tickets`

**Response:**
```json
[
  {
    "id": 1,
    "passengerName": "John Doe",
    "seatNumber": "A1"
  },
  {
    "id": 2,
    "passengerName": "Jane Smith",
    "seatNumber": "B2"
  }
]
```

#### Get Ticket by ID

Retrieve a ticket by its ID.

**Endpoint:** GET /api/v1/tickets/{id}

**Response:**
```json
{
"id": 1,
"passengerName": "John Doe",
"seatNumber": "A1"
}
```

#### Add Ticket

Add a new ticket.

**Endpoint:** POST /api/v1/tickets

**Request Body:**
```json
{
  "passengerName": "John Doe",
  "seatNumber": "A1"
}
```

**Response:**
```json
{
  "id": 1,
  "passengerName": "John Doe",
  "seatNumber": "A1"
}
```

