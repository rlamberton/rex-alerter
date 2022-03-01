function Alert(props) {
    const alert = props.item;
    const classname = 'alert ' + getColour(alert);
    return  <li className={classname}>
                <a href={alert.url}>
                    <div>{alert.time}</div>
                    <div>{alert.symbol}</div>
                    <div>{alert.pctChange}%</div>
                </a>
            </li>;
};

function getColour(alert) {
    if (alert.pctChange < -15) {
        return 'red';
    } else if (alert.pctChange < 0) {
        return 'orange';
    } else if (alert.pctChange == 0) {
        return 'grey';
    } else {
        return 'green';
    }
}

export default Alert;
