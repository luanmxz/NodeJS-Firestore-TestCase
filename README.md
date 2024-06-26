# NodeJS Firestore Test Case

This project is an introductory example of using Google Firestore with Node.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/luanmxz/NodeJS-Firestore-TestCase.git
    cd NodeJS-Firestore-TestCase
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your Firestore configuration in a `.env` file:

    ```ini
    FIRESTORE_PROJECT_ID=your_project_id
    FIRESTORE_CLIENT_EMAIL=your_client_email
    FIRESTORE_PRIVATE_KEY=your_private_key
    ```

## Usage

1. Start the application:

    ```bash
    npm start
    ```

2. The server will start, and you can use the provided endpoints to interact with Firestore.

## Project Structure

- **app/**: Contains the application logic
  - **controllers/**: Controllers for handling requests
  - **models/**: Firestore models
  - **routes/**: API routes
  - **services/**: Services for Firestore interactions

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
