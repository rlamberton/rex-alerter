import { useState } from 'react';
import Alert from './Alert';

var listOfAlerts, updateAlerts;

function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState(['one','three','two','four']);

    return <div>Alert List component
                <ul className='alertList'>
                    {listOfAlerts.map((item, index) => (
                        <Alert key={index} item={item}/>
                    ))}
                </ul>
            </div>;
};


setInterval(() => {
    const newAlerts = [...listOfAlerts];
    newAlerts.push((new Date()).toString());
    updateAlerts(newAlerts);
}, 1000);

export default AlertList;