# Real Chatter

Real Chatter is a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. This repository contains the API server code for Real Chatter.\
VIDEO LINKS: \
https://www.loom.com/share/4c3edf0affa7452ba09f97e23b5ae4dc - 5min\
https://www.loom.com/share/73d3f748d53348f48a10df7a786c84c5 - 2min


## Index

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and authentication
- Create, read, update, and delete thoughts
- React to thoughts (like, dislike)
- Create and manage a friend list
- Timestamp formatting using the `moment` package

## Technologies Used

- Express.js: Fast, unopinionated, and minimalist web framework for Node.js
- MongoDB: NoSQL document database for storing data
- Mongoose: MongoDB object modeling for Node.js
- Moment: JavaScript library for date and time formatting

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/real-chatter.git
   ```
2. Install the dependencies:

    ```
    cd real-chatter
    npm install
    ```
3. Configure the MongoDB connection:

Open the config/connection.js file.
Replace 'mongodb://localhost:27017/your_database_name' with the appropriate MongoDB connection string for your database.

4. Start the Server:
    ```
    npm start
    ```
The server will start running on http://localhost:3001.


## API Documentation
The API endpoints and their usage are documented below:

GET /api/thoughts: Get all thoughts.\
GET /api/thoughts/:id: Get a single thought by ID.\
POST /api/thoughts: Create a new thought.\
PUT /api/thoughts/:id: Update a thought by ID.\
DELETE /api/thoughts/:id: Delete a thought by ID.\
POST /api/thoughts/:id/reactions: React to a thought by ID (like, dislike).\
POST /api/users: Register a new user.\
POST /api/users/login: User login.\
GET /api/users/:id: Get a user by ID.\
GET /api/users: Get all users.\
PUT /api/users/:id/friends: Add a user to the friend list.\
DELETE /api/users/:id/friends/:friendId: Remove a user from the friend list.\
Please note that the API endpoints may require authentication or specific request payloads. Refer to the codebase and documentation for more details.


## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
