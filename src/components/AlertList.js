import { useState } from 'react';
import Alert from './Alert';
import LastUpdated from './LastUpdated.js';
import getNewAlerts from '../service/AlertService';

const REFRESH_PERIOD = 5000;    // Every 5 seconds
var listOfAlerts, updateAlerts, lastUpdatedTime, setLastUpdatedTime;

/**
 * React functional component for the Alert List
 * 
 * Component state holds the list of alerts
 */
function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState([]);
    [lastUpdatedTime, setLastUpdatedTime] = useState(new Date().toLocaleTimeString());

    return  <div>
                <ul className='alertList'>
                    {listOfAlerts.map((item, index) =>
                        <Alert key={index} item={item}/>
                    )}
                </ul>
                <LastUpdated time={lastUpdatedTime}/>
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

            // Auto-scroll to end of page if required
            document.querySelector("#lastUpdated").scrollIntoViewIfNeeded(true);
        }
    });

    setLastUpdatedTime(new Date().toLocaleTimeString());

}, REFRESH_PERIOD);

export default AlertList;
