# Next.js 13 Frontend App

This repository contains a frontend application built with Next.js 13. It was developed as part of a frontend assignment. The application is designed to showcase various features and best practices in modern web development.

## Getting Started

### Local Development

To get started with local development, follow the instructions below:

1. **Clone the repository:**
   ```
   git clone https://github.com/illegalcall/speedy-fe-assignment.git
   ```

2. **Navigate to the project directory:**
   ```
   cd speedy-fe-assignment
   ```

3. **Install dependencies:**
   ```
   yarn
   ```

4. **Start the development server:**
   ```
   yarn dev
   ```

   This command will start the development server, and the application will be accessible at [http://localhost:3000](http://localhost:3000).

### Docker Development

To get started with Docker, make sure you have Docker and Docker Compose installed on your machine. Then follow the instructions below:

1. **Clone the repository:**
   ```
   git clone https://github.com/illegalcall/speedy-fe-assignment.git
   ```

2. **Navigate to the project directory:**
   ```
   cd speedy-fe-assignment
   ```

3. **Build the Docker image:**
   ```
   docker build -t docker-nextjs-dev .
   ```

4. **Start the Docker containers:**
   ```
   docker-compose up
   ```

   This command will build the Docker image and start the containers. The application will be accessible at [http://localhost:3333](http://localhost:3333).

   Any changes made to the source code will automatically trigger hot-reloading inside the Docker container.

## Project Structure

The project structure is organized as follows:

```
nextjs-13-app/
  ├── api/                    # API routes
  ├── components/             # Reusable components
  ├── pageComponents/         # Folder-wise components for specific pages
  ├── xyz/                    # Pages and routes
  │   ├── page.tsx            # Page component
  │   ├── PageComponents.tsx  # Components specific to this page
  │   └── Page.module.css     # CSS module for this page   
  └── ...                     # Other folders for different pages
  ├── styles/                 # CSS styles and global styles
  ├── public/                 # Static assets
  │   ├── data.json           # Json file to store data  
  ├── utils/                  # Utility functions
  ├── types.ts                # Types used throughout the app
  ├── consts.ts               # Routes used in the app
  ├── .gitignore              # Git ignore file
  ├── package.json            # Node.js dependencies and scripts
  ├── README.md               # Project documentation (you're here!)
  └── ...                     # Other configuration files


```

## Technologies Used

The application utilizes the following technologies and libraries:

- **Next.js**: A popular React framework for building server-rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **SCSS Modules**: A SASS approach that allows for modular and scoped styles.
- 

## Docker Files

The repository now includes the following Docker files:

- **Dockerfile**: This file contains the instructions to build a Docker image for the application.
- **docker-compose.yml**: This file defines the services, volumes, and network for the Docker containers.


Note: Make sure to customize the Dockerfile and docker-compose.yml file based on your project's requirements and dependencies.

## API Documentation

For detailed documentation on the API routes and endpoints, please refer to the [API README.md](./app/api/README.md) file.

## Contributing

If you'd like to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name:
   ```
   git checkout -b my-feature
   ```
3. Make the necessary changes and commit them.
4. Push the changes to your forked repository.
5. Submit a pull request explaining the changes you made.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- This project was developed by [Your Name].
- Special thanks to the creators of Next.js for their amazing framework.
- [Insert any other acknowledgements or credits here, if applicable.]

Feel free to update this README file as needed to provide more details about the project. Good luck!