import { getMarketSummaries, getMarkets, getMarketTickers } from "./bittrexApi";

const BITTREX_TRADING_URL = 'https://global.bittrex.com/Market/Index?MarketName=';
var previousTickers = {};
const marketSummary = {};

(function init() {
    var response = getMarketSummaries();
    response.then((json) => {
        Object.keys(json)
            .filter((key) => json[key].symbol.endsWith('-BTC'))
            .forEach((key) => {
                const summary = json[key];
                marketSummary[summary.symbol] = {summary: summary};
            });
    })

    response = getMarkets();
    response.then((json) => {
        Object.keys(json)
            .filter((key) => json[key].symbol.endsWith('-BTC'))
            .forEach((key) => {
                const market = json[key];
                const summary = marketSummary[market.symbol];
                summary.market = market;
            });
    })

})();

/**
 * Retrieve any new alerts from the API
 */
async function getNewAlerts() {
    const alerts = [];
    const newTickers = {};

    // Call the Bittrex API to fetch the latest market tickers
    const json = await getMarketTickers();
    
    // Only interested in BTC markets
    Object.keys(json)
        .filter((key) => json[key].symbol.endsWith('-BTC'))
        .forEach((key) => {
            const ticker = json[key];
            const prevTicker = previousTickers[ticker.symbol];

            if (prevTicker) {
                const pctChange = (100 - 100 * (Number(ticker.askRate) / Number(prevTicker.askRate))).toFixed(2);
                const volume = Number(marketSummary[ticker.symbol].summary.quoteVolume).toFixed(2);

                // Only interested in those that have moved more than 5% up or down
                if (volume > 0.05 && (pctChange > 5 || pctChange < -5)) {
                    alerts.push({
                        time: new Date().toLocaleTimeString(),
                        symbol: ticker.symbol,
                        pctChange: pctChange,
                        url: BITTREX_TRADING_URL + swapSymbols(ticker.symbol),
                        newPrice: pctChange < 0 ? prevTicker.askRate : ticker.askRate,
                        oldPrice: pctChange < 0 ? ticker.askRate : prevTicker.askRate,
                        volume: volume
                    });
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
 * Swap the 2 symbols as they are in a different order in the url
 */
function swapSymbols(symbols) {
    const arr = symbols.split('-');
    return arr[1] + '-' + arr[0];
}

export default getNewAlerts;
