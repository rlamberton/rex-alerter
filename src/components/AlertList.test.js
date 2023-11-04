import { render } from '@testing-library/react';
import { AlertList, fetchAlerts } from './AlertList';

const data = {
    url: 'http://url.com',
    time: '10:30',
    logoUrl: 'http:/logo.com',
    symbol: 'XYZ',
    name: 'crypto-name',
    volume: 1000,
    oldPrice: 2000,
    newPrice: 2200,
    pctChange : 10
};

const MOCK_RESULTS = {
    ETH: {
        symbol: 'ETH-BTC',
        status: 'OFFLINE'
    },
    'ETH-BTC': {
        symbol: '',
        status: 'ONLINE'
    }
}

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
}

test('check snapshot', () => {
    const { asFragment } = render(<AlertList item={data} />);
    expect( asFragment() ).toMatchSnapshot();
});

test('call fetchAlerts', () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({eth: {
            symbol: 'ETH-BTC'
        }})
    })

    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const result = fetchAlerts(mock1, mock2);

    jest.restoreAllMocks();

    expect(mock1).toBeCalledTimes(0);
    expect(mock2).toBeCalledTimes(1);
});
