
/**
 * React functional component for each Alert
 */
function Alert(props) {
    const alert = props.item;
    const classname = 'alert ' + getColour(alert);
    const arrowClass = (alert.pctChange < 0) ? 'rotateRight90' : 'rotateLeft90';

    return  <li className={classname}>
                <a href={alert.url} target="_blank">
                    <div className='smallFont'>{alert.time}</div>
                    <img src={alert.logoUrl}/>
                    <div>
                        <div>{alert.symbol}</div>
                        <div className='smallFont'>{alert.name}</div>
                    </div>
                    <div className='smallFont'>vol:&#8383;{alert.volume}</div>
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
        return 'red large';
    } else if (alert.pctChange < -10) {
        return 'red';
    } else if (alert.pctChange < -6) {
        return 'purple';
    } else if (alert.pctChange < -3) {
        return 'orange';
    } else if (alert.pctChange == 0) {
        return 'grey';
    } else if (alert.pctChange > 10) {
        return 'blue';
    } else {
        return 'green';
    }
}

export default Alert;
