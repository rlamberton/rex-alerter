
/**
 * React functional component for each Alert
 */
function Alert(props) {
    const alert = props.item;
    const classname = 'alert ' + getColour(alert);
    const arrowClass = (alert.pctChange < 0) ? 'rotateRight90' : 'rotateLeft90';

    return  <li className={classname}>
                <a href={alert.url} target="_blank">
                    <div>{alert.time}</div>
                    <div>{alert.symbol}</div>
                    <div className='smallFont'>
                        {alert.oldPrice}
                        <div className={arrowClass}> &#x279C; </div>
                        {alert.newPrice}
                    </div>
                    <div>{alert.pctChange}%</div>
                </a>
            </li>;
};

/**
 * Determine the colour for the component, depending on the percentage change in price
 */
function getColour(alert) {
    if (alert.pctChange < -20) {
        return 'red';
    } else if (alert.pctChange < -10) {
        return 'pink';
    } else if (alert.pctChange < 0) {
        return 'orange';
    } else if (alert.pctChange == 0) {
        return 'grey';
    } else {
        return 'green';
    }
}

export default Alert;
