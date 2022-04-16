import { getMarketSummaries, getMarkets, getMarketTickers, getCurrencies } from "../api/bittrexApi";
import AlertType from "../types/AlertType";

const BITTREX_TRADING_URL = 'https://global.bittrex.com/Market/Index?MarketName=';
const MINIMUM_VOLUME : number = 0.2;
const MINIMUM_PCT_CHANGE = 5;

var previousTickers = {};
const marketSummary = {};
const markets = {};
const currencies = {};

/**
 * Initialisation block:
 * 1. Fetch the market summaries (for market volume)
 * 2. Fetch the markets (for market status & notices)
 * 3. Fetch the currencies (for currency name & logo)
 */
(function init() {
    var response = getMarketSummaries();
    response.then((json) => {
        Object.keys(json)
            .filter((key) => json[key].symbol.endsWith('-BTC'))
            .forEach((key) => marketSummary[json[key].symbol] = json[key]);
    })

    response = getMarkets();
    response.then((json) => {
        Object.keys(json)
            .filter((key) => json[key].symbol.endsWith('-BTC'))
            .forEach((key) => markets[json[key].symbol] = json[key]);
    })

    response = getCurrencies();
    response.then((json) => {
        Object.keys(json)
            .forEach((key) => currencies[json[key].symbol] = json[key]);
    })

})();

/**
 * Retrieve any new alerts from the API
 * This is invoked every 5 seconds
 */
async function getNewAlerts() : Promise<Array<AlertType>> {
    const alerts : Array<AlertType> = [];
    const newTickers = {};

    // Call the Bittrex API to fetch the latest market tickers
    const json = await getMarketTickers();
    
    // Only interested in Online BTC markets, that do not have a notice set (i.e. delisting/removal or offline)
    Object.keys(json)
        .filter((key) => json[key].symbol.endsWith('-BTC'))
        .filter((key) => markets[json[key].symbol].status.trim() == 'ONLINE' && !markets[json[key].symbol].notice)
        .forEach((key) => {
            const ticker = json[key];
            const prevTicker = previousTickers[ticker.symbol];

            // Compare ask price with the previous call 5 seconds ago
            if (prevTicker) {
                const pctChange : number = -(100 * (1 - Number(ticker.askRate) / Number(prevTicker.askRate))).toFixed(2);
                const volume : number = Number(Number(marketSummary[ticker.symbol].quoteVolume).toFixed(2));

                // Only interested in those have significant volume and have moved more than 3% up or down
                if (volume > MINIMUM_VOLUME && (pctChange > MINIMUM_PCT_CHANGE || pctChange < -MINIMUM_PCT_CHANGE)) {
                    const currency : string = ticker.symbol.split('-')[0];
                    const newAlert : AlertType = {
                        time: new Date().toLocaleTimeString(),
                        symbol: ticker.symbol,
                        pctChange: pctChange,
                        url: BITTREX_TRADING_URL + swapSymbols(ticker.symbol),
                        newPrice: pctChange > 0 ? prevTicker.askRate : ticker.askRate,
                        oldPrice: pctChange > 0 ? ticker.askRate : prevTicker.askRate,
                        volume: volume,
                        name: currencies[currency].name,
                        logoUrl: currencies[currency].logoUrl
                    };
                    alerts.push(newAlert);
                }
            }
        });

    // Store tickers to compare them next time
    previousTickers = {};
    Object.keys(json)
        .forEach((key) => {
            const ticker = json[key];
            previousTickers[ticker.symbol] = ticker;
        })

    return alerts;

}

/**
 * Swap the 2 symbols as they are in a different order in the trading url
 */
function swapSymbols(symbols : string) : string {
    const arr = symbols.split('-');
    return arr[1] + '-' + arr[0];
}

export default getNewAlerts;
