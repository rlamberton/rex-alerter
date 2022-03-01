import { useState } from 'react';
import Alert from './Alert';

var listOfAlerts, updateAlerts;

function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState([]);

    return <div>Alert List component
                <ul className='alertList'>
                    {listOfAlerts.map((item, index) =>
                        <Alert key={index} item={item}/>
                    )}
                </ul>
            </div>;
};

setInterval(() => {
    const newAlerts = getNewAlerts();
    if (newAlerts) {
        updateAlerts(oldAlerts => [...oldAlerts].concat(newAlerts));
    }
}, 2000);

function getNewAlerts() {
    const alerts = [];
    alerts.push({
        time: new Date().toLocaleTimeString(),
        symbol: 'ABC-DEF',
        pctChange: '-10'
    });
    return alerts;
}

export default AlertList;
