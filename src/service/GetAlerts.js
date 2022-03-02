import { getMarketTickers } from "./bittrexApi";

const BITTREX_TRADING_URL = 'https://global.bittrex.com/Market/Index?MarketName=';

/**
 * Retrieve any new alerts from the API
 */
async function getNewAlerts() {
    const alerts = [];

    // Call the Bittrex API to fetch the latest market tickers
    const json = await getMarketTickers();

    for (var key in json) {
        const ticker = json[key];
        if (ticker.symbol.startsWith('BTC-')) {
            alerts.push({
                time: new Date().toLocaleTimeString(),
                symbol: ticker.symbol,
                pctChange: '-10',
                url: BITTREX_TRADING_URL + ticker.symbol,
                newPrice: ticker.askRate,
                oldPrice: ticker.bidRate
            });
        }
    }

    return alerts;

}

export default getNewAlerts;
