import React from 'react';
import LastUpdatedPropsType from '../types/LastUpdatedPropsType';

const lastUpdated : React.FC<LastUpdatedPropsType> = function LastUpdated(props) {
    return <div id='lastUpdated'>Last updated at {props.time}</div>
}

export default lastUpdated;
