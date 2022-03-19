interface AlertType {
    name: string;
    symbol: string;
    logoUrl: string;
    url: string;
    newPrice: number;
    oldPrice: number;
    volume: number;
    pctChange: number;
    time: string;

}

export default AlertType;