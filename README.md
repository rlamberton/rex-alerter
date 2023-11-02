# Bittrex Alerter
Written by: Richard Lamberton

This is a React/Typescript app which fetches the latest crypto prices from Bittrex using the API - see https://bittrex.github.io/api/v3
It will alert you when crypto prices increase or drop by a minimum of 3%
Prices are monitored every 5 seconds.

![Image](/public/screenshot.png "screenshot")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre Requisites
This app requires a CORS proxy (Bittrex does not allow direct browser JS access via AJAX)
You need to checkout the following repo: https://github.com/Rob--W/cors-anywhere
and run `npm install` then `node server.js`
The CORS proxy will then be accessible on localhost:8080

## Available Scripts

In the project directory, you can run:

### `npm install`

This needs to be run once, after the initial repo is downloaded. It installs all dependency libraries required by the app.

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


## List of requirements/functionality
1. Invoke Bittrex public Market Summaries API every 5 seconds
2. Display alerts containing:
   * Time
   * Ticker Symbol
   * Currency name
   * Curreny logo
   * 24hr volume
   * ask price (current & previous)
   * Percentage change
   * Colour based on percantage change
3. When ask price DECREASED:
   * More than 20% - Red colour, larger font size, bold, beep
   * More than 10% - Red colour, beep
   * More than 6% - Purple colour
   * More than 3% - Orange colour
4. When ask price INCREASED:
   * No increase - Grey colour
   * Less than 10% - Green colour
   * More than 10% - Blue colour
5. Auto-scroll to end when new alerts are displayed
6. Click alert to open a new browser tab on the Bittrex trading screen for that market
7. Ignore new coins that are less than 3 days old
8. Ignore previously pumped coins (> 20%)
9. Ignore non-BTC markets
10. Ignore low-volume coins (< 0.05btc))
11. Ignore markets with notices (e.g. delisting/removal) or which are OFFLINE
