import { getMarketTickers, getMarketSummaries, getMarkets, getCurrencies } from './bittrexApi';

const ERROR = {
    error: "Call to the API failed"
};

let results;

beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({api: "Working"})
    })
});
  
afterEach(() => {
    jest.restoreAllMocks();
});

describe('When the getMarketTickers API returns OK', () => {
    beforeEach(async () => {
        results = await getMarketTickers();
    });

    it('Then the mock results should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getMarketSummaries API returns OK', () => {
    beforeEach(async () => {
        results = await getMarketSummaries();
    });

    it('Then the mock results should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getMarkets API returns OK', () => {
    beforeEach(async () => {
        results = await getMarkets();
    });

    it('Then the mock results should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getCurrencies API returns OK', () => {
    beforeEach(async () => {
        results = await getCurrencies();
    });

    it('Then the mock results should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});


describe('When the getMarketTickers API fails', () => {
    beforeEach(async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue(ERROR);

        results = await getMarketTickers();
    });

    it('Then an error should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getMarketSummaries API fails', () => {
    beforeEach(async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue(ERROR);

        results = await getMarketSummaries();
    });

    it('Then an error should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getMarkets API fails', () => {
    beforeEach(async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue(ERROR);

        results = await getMarkets();
    });

    it('Then an error should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});

describe('When the getCurrencies API fails', () => {
    beforeEach(async () => {
        jest.spyOn(global, 'fetch').mockResolvedValue(ERROR);

        results = await getCurrencies();
    });

    it('Then an error should be returned', () => {
        expect( results ).toMatchSnapshot();
    });
});