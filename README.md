Quote App
Welcome to the Quote App! This project allows users to sign up, log in, and write quotes using GraphQL Apollo for both client and server.

Features
User Authentication: Users can sign up and log in securely to access the app's functionalities.
Write Quotes: Authenticated users can write their favorite quotes.
GraphQL Apollo Client: Utilizes GraphQL Apollo Client for efficient data fetching and state management.
GraphQL Apollo Server: Implements a GraphQL Apollo Server to handle data requests and mutations.
Technologies Used
Frontend:

React
Apollo Client
HTML
Tailwind CSS
Backend:

Node.js
Express
GraphQL Apollo Server
MongoDB 
Getting Started
Prerequisites
Node.js and npm installed on your machine.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/quote-app.git
Navigate to the project directory:

bash
Copy code
cd quote-app
Install dependencies for both the client and server:

bash
Copy code
cd client
npm install


npm install
Set up environment variables:

Create a .env file in the server directory.
Define the following variables:
makefile
Copy code

MONGODB_URI=your_mongodb_uri
Start the server:

bash
Copy code

npm start
Start the client:

bash
Copy code
cd ../client
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

Acknowledgements
Thanks to GraphQL and Apollo for their powerful tools.
Hat tip to anyone whose code was used.
