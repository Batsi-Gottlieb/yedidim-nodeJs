# <span style="color: #4CAF50;">Yadidim Organization Management System 🚌⚒️</span>

## Introduction

The **Yadidim Organization Management System** is a backend solution built with Node.js and MongoDB. It is designed to efficiently manage the operations of Yadidim, a volunteer-based organization that provides roadside assistance, such as tire changes, unlocking doors, and other emergency services.

## Features

- **Request Management**: View, filter, and manage assistance requests.
- **Volunteer Management**: Volunteers can accept requests and update their status.
- **Geographical Filtering**: Filter requests by regions and cities for better coordination.
- **Status Updates**: Track the status of each request in real-time.
- **Efficient Operations**: All the necessary tools for Yadidim to function effectively and help those in need.

## Technologies

- **Node.js**: The server-side runtime environment.
- **Express.js**: A web application framework for Node.js.
- **MongoDB**: A NoSQL database for storing all data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/yadidim-management-system.git
    cd yadidim-management-system
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=your_preferred_port
    ```

4. **Run the application:**
    ```bash
    npm start
    ```

## API Endpoints

### Requests

- `GET /api/requests` - Retrieve all assistance requests.
- `POST /api/requests` - Create a new assistance request.
- `GET /api/requests/:id` - Retrieve a specific request by ID.
- `PUT /api/requests/:id` - Update a specific request by ID.
- `DELETE /api/requests/:id` - Delete a specific request by ID.

### Volunteers

- `GET /api/volunteers` - Retrieve all volunteers.
- `POST /api/volunteers` - Register a new volunteer.
- `GET /api/volunteers/:id` - Retrieve a specific volunteer by ID.
- `PUT /api/volunteers/:id` - Update a specific volunteer by ID.
- `DELETE /api/volunteers/:id` - Delete a specific volunteer by ID.

## Contributing

We welcome contributions to the Yadidim Organization Management System! If you'd like to contribute, please fork the repository, create a new branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or questions, please contact us at <span style="color: #4CAF50;">support@yadidim.org</span>.
