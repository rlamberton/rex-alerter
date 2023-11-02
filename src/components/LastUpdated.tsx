import React from 'react';
import LastUpdatedPropsType from '../types/LastUpdatedPropsType';

const lastUpdated : React.FC<LastUpdatedPropsType> = function LastUpdated(props) {
    return <div id='lastUpdated' data-testid='alert-list-last-updated'>Last updated at {props.time}</div>
}

export default lastUpdated;
