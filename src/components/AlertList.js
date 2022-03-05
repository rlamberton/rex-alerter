import { useState } from 'react';
import Alert from './Alert';
import getNewAlerts from '../service/alertService';

const REFRESH_PERIOD = 5000;    // Every 5 seconds
var listOfAlerts, updateAlerts;

/**
 * React functional component for the Alert List
 * 
 * Component state holds the list of alerts
 */
function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState([]);

    return  <div>
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
        if (newAlerts && newAlerts.length) {
            // Update the state with the new list
            updateAlerts(oldAlerts => [...oldAlerts].concat(newAlerts));

            // Auto-scroll to new element
            const alertListElement = document.querySelector(".alertList");
            let lastAlert = alertListElement.lastElementChild;
            if (lastAlert) {
                lastAlert.scrollIntoViewIfNeeded(true);
            }
        }
    });

}, REFRESH_PERIOD);

export default AlertList;
