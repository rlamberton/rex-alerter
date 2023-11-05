import getNewAlerts from "./AlertService";

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(
            { eth: { symbol: 'ETH-BTC', quoteVolume: 20, askRate: 100, name: "Etherium", status: 'ONLINE' } ,
            'ETH-BTC': { symbol: 'ETH', status: 'ONLINE', name: "Etherium" },
            ETH: { name: 'Etherium', symbol: 'ETH', status: 'ONLINE'}}
        )
    })
});
  
afterEach(() => {
    jest.restoreAllMocks();
});

test('check snapshot', async () => {
    let results = await getNewAlerts();
    expect( results ).toMatchSnapshot();

    results = await getNewAlerts();
    expect( results ).toMatchSnapshot();

    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(
            { eth: { symbol: 'ETH-BTC', quoteVolume: 20, askRate: 1, status: 'ONLINE' } ,
            'ETH-BTC': { symbol: 'ETH', status: 'ONLINE' }}
        )
    })

    results = await getNewAlerts();
    results[0].time = '08:30';
    expect( results ).toMatchSnapshot();
});