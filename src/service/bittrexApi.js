// CORS proxy is required since Bittrex does not allow AJAX from browser
//const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CORS_PROXY = 'http://localhost:8080/';
const MARKET_TICKERS_URL = 'https://api.bittrex.com/v3/markets/tickers';

async function getMarketTickers() {
    const response = await fetch(CORS_PROXY + MARKET_TICKERS_URL, {'Content-Type': 'application/json', 'Accept': 'application/json'});
    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return response;
}

export { getMarketTickers };
