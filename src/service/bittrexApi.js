// CORS proxy is required since Bittrex does not allow AJAX from browser
//const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const CORS_PROXY = 'http://localhost:8080/';
const MARKET_TICKERS_URL = 'https://api.bittrex.com/v3/markets/tickers';
const MARKET_SUMMARIES_URL = 'https://api.bittrex.com/v3/markets/summaries';
const MARKETS_URL = 'https://api.bittrex.com/v3/markets';

async function getMarketTickers() {
    const response = await fetch(CORS_PROXY + MARKET_TICKERS_URL, {'Content-Type': 'application/json', 'Accept': 'application/json'});
    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return response;
}

async function getMarketSummaries() {
    const response = await fetch(CORS_PROXY + MARKET_SUMMARIES_URL, {'Content-Type': 'application/json', 'Accept': 'application/json'});
    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return response;
}

async function getMarkets() {
    const response = await fetch(CORS_PROXY + MARKETS_URL, {'Content-Type': 'application/json', 'Accept': 'application/json'});
    if (response.ok) {
        const json = await response.json();
        return json;
    }

    return response;
}

export { getMarketTickers, getMarketSummaries, getMarkets };
