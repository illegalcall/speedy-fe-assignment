# API Documentation

Welcome to the API documentation for the Next.js 13 Frontend App!

## Introduction

This API provides the backend functionality for the Next.js 13 Frontend App. It offers various routes and endpoints to interact with the application's data and perform CRUD operations.

## Base URL

The base URL for all API endpoints is: `https://speedy-fe-assignment.vercel.app/`

## Routes

### POST /api/blog

Create a new blog.

**Request Body:**
```json
{
  "title": "Example Blog",
  "tone": "Informative"
}
```

**Response:**
```json
{
  "id": 1,
  "title": "Example Blog",
  "tone": "Informative",
  "content": "This is an example content"
}
```

### GET /api/topics

Retrieve a list of all topics.

**Response:**
```json
[
  {
    "id": "1",
    "title": "Example topic",
    "tags": [
      "example tag1",
      "example tag2",
    ],
    "category": "Mission"
	},
  {
    
    "id": "4",
    "title": "Hello",
     "tags": [
      "example tag3",
      "example tag4",
    ],
    "category": "Custom"
  },
  ...
]
```

### POST /api/blog

Create a new topic.

**Request Body:**
```json
{
  "title": "Example Blog",
  "keywords": "tag1,tag2,tag3"
}
```

**Response:**
```json
[
  {
    "id": "1",
    "title": "Example topic",
    "tags": [
      "example tag1",
      "example tag2",
    ],
    "category": "Mission"
	},
  ...
]
```

### GET /api/topics/:id

Retrieve details of a specific topic.

**Request Body:**
```json
{
  "id": "4",
}
```

**Response:**
```json
{
  "id": "1",
  "title": "Example topic",
  "tags": [
    "example tag1",
    "example tag2",
  ],
  "category": "Mission"
}
```


### DELETE /api/topics/:id

Delete a specific topic.

**Request Body:**
```json
{
  "id": "4",
}
```

**Response:**
```json
[
  {
    "id": "1",
    "title": "Example topic",
    "tags": [
      "example tag1",
      "example tag2",
    ],
    "category": "Mission"
	},
  ...
]

```