import { getMarketTickers, getMarketSummaries, getMarkets, getCurrencies } from './bittrexApi';

test('check getMarketTickers', () => {
    const results = getMarketTickers();
    expect( results ).toMatchSnapshot();
});

test('check getMarketSummaries', () => {
    const results = getMarketSummaries();
    expect( results ).toMatchSnapshot();
});

test('check getMarkets', () => {
    const results = getMarkets();
    expect( results ).toMatchSnapshot();
});

test('check getCurrencies', () => {
    const results = getCurrencies();
    expect( results ).toMatchSnapshot();
});