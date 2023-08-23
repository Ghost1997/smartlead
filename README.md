# Node.js Project Setup Readme

Welcome to the Node.js project setup guide. This document will guide you through the steps to set up and run the project on your local machine. This project utilizes PostgreSQL as its database and is deployed on an AWS EC2 instance.

## Prerequisites

Before you start, make sure you have the following tools installed on your system:

- Node.js
- Git
- PostgreSQL
- npm (Node Package Manager)

## Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Git Repo

Clone the project repository to your local machine using the following command:

```bash
git clone https://github.com/Ghost1997/smartlead.git
```



### 2. Create .env File

Navigate to the project directory and create a `.env` file. You can use the provided `example.env` file as a template. Fill in the appropriate values for the environment variables, such as database connection settings and any other configuration variables required by the project.

```bash
cp example.env .env
```

Edit the `.env` file and provide the necessary values.

### 3. Install Dependencies

Install the project dependencies using npm by running the following command in the project directory:

```bash
npm install
```

### 4. Start the Server

To start the server in development mode, run the following command:

```bash
npm run dev
```

This command will start the Node.js server locally. You should see console logs indicating that the server is up and running.

### 5. Access Health Check

Once the server is running, you can access the health check endpoint using the provided URL:

[http://13.53.174.158:4000/healthcheck](http://13.53.174.158:4000/healthcheck)

This URL will provide you with information about the health status of the deployed application.

## Deployment

Please note that the project is deployed on an AWS EC2 instance. The health check URL mentioned above is where the deployed application's health status can be monitored.

For deployment details and instructions specific to the AWS EC2 deployment, please refer to the deployment documentation provided separately.

## Conclusion

Congratulations! You have successfully set up the Node.js project on your local machine and learned how to run the server. If you encounter any issues or have questions, feel free to reach out to the project maintainers.

Happy coding! 🚀
