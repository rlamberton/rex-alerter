import { useState } from 'react';
import Alert from './Alert';
import getNewAlerts from './../service/GetAlerts';

const UPDATE_EVERY_5_SECONDS = 5000;
var listOfAlerts, updateAlerts;

/**
 * React functional component for the Alert List
 * 
 * Component state holds the list of alerts
 */
function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState([]);

    return  <div>Bittrex Alert List
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
    const newAlertsPromise = getNewAlerts();
    newAlertsPromise.then((newAlerts) => {
        if (newAlerts) {
            // Update the state with the new list
            updateAlerts(oldAlerts => [...oldAlerts].concat(newAlerts));

            // Auto-scroll to new element
            const alertListElement = document.querySelector(".alertList");
            let lastAlert = alertListElement.lastElementChild;
            lastAlert.scrollIntoViewIfNeeded(true);
        }
    });

}, UPDATE_EVERY_5_SECONDS);

export default AlertList;
