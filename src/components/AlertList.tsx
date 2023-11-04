import { useState, useEffect } from 'react';
import Alert from './Alert';
import AlertType from '../types/AlertType';
import LastUpdated from './LastUpdated';
import getNewAlerts from '../service/AlertService';
import React from 'react';

const REFRESH_PERIOD : number = 1000;    // Every 5 seconds

const fetchAlerts = (updateAlerts, setLastUpdatedTime) => {
    const newAlertsPromise = getNewAlerts();
    newAlertsPromise.then((newAlerts) => {
        if (newAlerts && newAlerts.length) {
            // Update the state with the new list
            updateAlerts(oldAlerts => [...oldAlerts].concat(newAlerts));

            // Auto-scroll to end of page if required
            document.querySelector("#lastUpdated")?.scrollIntoView(true);
        }
    });

    setLastUpdatedTime(new Date().toLocaleTimeString());
}

/**
 * React functional component for the Alert List
 * 
 * Component state holds the list of alerts
 */
const AlertList : React.FC = function AlertList(props) {
    const [listOfAlerts, updateAlerts] = useState<AlertType[]>([]);
    const [lastUpdatedTime, setLastUpdatedTime] = useState<string>('');

    /* Timer to fire every 5 seconds, to fetch the latest alerts from the API */
    useEffect(() => {
        const interval = setInterval(() => {
            fetchAlerts(updateAlerts, setLastUpdatedTime);
        }, REFRESH_PERIOD);

        return () => clearInterval(interval);
    }, []);

    return  <div>
                <ul className='alertList' data-testid='alert-list'>
                    {listOfAlerts.map((item, index) =>
                        <Alert key={index} item={item}/>
                    )}
                </ul>
                <LastUpdated time={lastUpdatedTime}/>
            </div>;
};

export {AlertList, fetchAlerts};
