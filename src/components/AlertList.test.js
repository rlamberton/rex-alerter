import { render } from '@testing-library/react';
import AlertList from './AlertList';

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

test('check snapshot', () => {
    const { asFragment } = render(<AlertList item={data} />);
    expect( asFragment() ).toMatchSnapshot();
});
