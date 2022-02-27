import Alert from './Alert';

function AlertList(props) {
    return <div>Alert List component
                <ul class='alertList'>
                    {props.items.map((item, index) => (
                        <Alert key={index} item={item}/>
                    ))}
                </ul>
            </div>;
};

export default AlertList;