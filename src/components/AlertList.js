import { useState } from 'react';
import Alert from './Alert';

const BITTREX_TRADING_URL = 'https://global.bittrex.com/Market/Index?MarketName='
const UPDATE_EVERY_5_SECONDS = 5000;
var listOfAlerts, updateAlerts;

/**
 * React functional component for the Alert List
 */
function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState([]);

    return <div>Bittrex Alert List
                <ul className='alertList'>
                    {listOfAlerts.map((item, index) =>
                        <Alert key={index} item={item}/>
                    )}
                </ul>
            </div>;
};

/**
 * Timer to fire every 5 seconds, to fetch the latest alerts from the API
 */
setInterval(() => {
    const newAlerts = getNewAlerts();
    if (newAlerts) {
        updateAlerts(oldAlerts => [...oldAlerts].concat(newAlerts));

        // Auto-scroll to new element
        const alertListElement = document.querySelector(".alertList");
        let lastAlert = alertListElement.lastElementChild;
        lastAlert.scrollIntoViewIfNeeded(true);
    }
}, UPDATE_EVERY_5_SECONDS);

/**
 * Retrieve any new alerts from the API
 */
function getNewAlerts() {
    const alerts = [];
    alerts.push({
        time: new Date().toLocaleTimeString(),
        symbol: 'BTC-VET',
        pctChange: '-10',
        url: BITTREX_TRADING_URL + 'BTC-VET',
        newPrice: '0.000323',
        oldPrice: '0.000380'
    });
    return alerts;
}

export default AlertList;
