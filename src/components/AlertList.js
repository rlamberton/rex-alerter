import { useState } from 'react';
import Alert from './Alert';

var listOfAlerts, updateAlerts;

function AlertList(props) {
    [listOfAlerts, updateAlerts] = useState(['one','three','two','four']);

    return <div>Alert List component
                <ul className='alertList'>
                    {listOfAlerts.map((item, index) =>
                        <Alert key={index} item={item}/>
                    )}
                </ul>
            </div>;
};

setInterval(() => {
    updateAlerts(oldAlerts => [...oldAlerts, new Date().toString()]);
}, 2000);

export default AlertList;