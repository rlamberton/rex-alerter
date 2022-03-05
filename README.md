# Bittrex Alerter
This App fetches the latest crypto prices from Bittrex using the API.
It will alert you when crypto prices drop by 10-20%
Prices are monitored every 5 seconds.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pre Requisites
This app requires a CORS proxy (Bittrex does not allow direct browser JS access via AJAX)
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


## List of requirements/functionality
1. Invoke Bittrex public Market Summaries API every 5 seconds
2. Display alerts containing:
   a) Time
   b) Ticker Symbol
   c) Currency name
   d) Curreny logo
   e) 24hr volume
   f) ask price (current & previous)
   g) Percentage change
   h) Colour based on percantage change
3. When ask price DECREASED:
   a) More than 20% - Red colour, larger font size, bold, beep
   b) More than 10% - Red colour, beep
   c) More than 6% - Purple colour
   d) More than 3% - Orange colour
4. When ask price INCREASED:
   a) No increase - Grey colour
   b) Less than 10% - Green colour
   c) More than 10% - Blue colour
5. Auto-scroll to end when new alerts are displayed
6. Click alert to open a new browser tab on the Bittrex trading screen for that market
7. Ignore new coins that are less than 3 days old
8. Ignore previously pumped coins (> 20%)
9. Ignore non-BTC markets
10. Ignore low-volume coins (< 0.05btc))
11. Ignore markets with notices (e.g. delisting/removal) or which are OFFLINE
