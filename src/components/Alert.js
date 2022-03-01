function Alert(props) {
    const alert = props.item;
    console.log(alert);
    return  <li className='alert'>
                <a href='/'>{alert.symbol} {alert.pctChange}% {alert.time}  </a>
            </li>;
};

export default Alert;