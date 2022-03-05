# Bittrex Alerter
This App fetches the latest crypto prices from Bittrex using the API.
It will alert you when crypto prices drop by 10-20%
Prices are monitored every 5 seconds.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre Requisites
This app requires a CORS proxy (Bittrex does not allow direct access via AJAX from JavaScript)
You need to checkout the following repo: https://github.com/Rob--W/cors-anywhere
and run `npm install` then `node server.js`
The CORS proxy will then be accessible on localhost:8080

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

