# Work in Progress

  

This is a CRUD (Create, Read, Update, Delete) app that allows you to manage contacts. You can create new contacts, retrieve existing contacts, update existing contacts, and delete contacts that are no longer needed.

  

## Features

  

- Create new contacts by providing a name, email address, and phone number

- Retrieve a specific contact by ID

- Retrieve all contacts

- Update an existing contact by ID

- Delete a contact by ID

  

## Requirements

  

To run this app, you will need the following:

  

- Node.js

- MongoDB database

  

## Installation

  

1. Clone the repository to your local machine

2. Install dependencies by running `npm install`

3. Create a `.env` file with the following environment variables:

- MONGO_URI: the connection string for your MongoDB database

4. Start the app by running `npm start`

  

## Usage

  

You can use this app by sending HTTP requests to the API endpoints. Here are the available endpoints:

  

- GET /api/contacts - retrieve all contacts

- POST /api/contacts - create a new contact

- GET /api/contacts/:id - retrieve a specific contact by ID

- PUT /api/contacts/:id - update an existing contact by ID

- DELETE /api/contacts/:id - delete a contact by ID

  

To create a new contact, send a POST request to `/api/contacts` with the following JSON payload:

  
  

```

{

"name": "John Doe",

"email": "johndoe@example.com",

"phone": "123-456-7890"

}

```

  

To retrieve a specific contact, send a GET request to `/api/contacts/:id`, where `:id` is the ID of the contact you want to retrieve.

  

To update an existing contact, send a PUT request to `/api/contacts/:id` with the following JSON payload:

  

```

{

"name": "John Doe",

"email": "johndoe@example.com",

"phone": "123-456-7890"

}

```

  

To delete a contact, send a DELETE request to `/api/contacts/:id`, where `:id` is the ID of the contact you want to delete.

  
  

## Screenshots

![enter image description here](https://github.com/shrine2000/Express-CRUD/blob/main/screenshots/1.png?raw=true)


![enter image description here](https://github.com/shrine2000/Express-CRUD/blob/main/screenshots/2.png?raw=true)