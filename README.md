This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## SETUP

- In the terminal window, change directory to the root folder - 'cd client'
- Run the setup script - 'npm run setup' - This will install all needed dependecies and fix any minor errors your system runs into.
- To start the project, use the start script - 'npm start'.

## TESTING
- In the terminal window, change directory to the root folder - 'cd client'
- Install the jest testing framework using ```npm install --save-dev jest```
- Install some of the libraries we will use in our tests ```npm i --save-dev enzyme enzyme-adapter-react-16 react-test-renderer ```
- Run the testing and coverage script using the command:
```npm test -- --coverage```

### Running tests in 'watch mode'
Open one terminal tab for your Jest tests in watch mode with ```npm run test:watch``` and one open terminal tab to start your React application with npm start. Every time you change a source file, your tests should run again because of the watch mode.
