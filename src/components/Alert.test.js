import { render } from '@testing-library/react';
import Alert from './Alert';

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
    const { asFragment } = render(<Alert item={data} />);
    expect( asFragment() ).toMatchSnapshot();
});

test('check percentage - increase', () => {
    const { getByTestId } = render(<Alert item={data} />);
    const pctElement = getByTestId('alert-volume');
    const alertElement = getByTestId('alert');
    const arrowElement = getByTestId('alert-arrow');
    expect(pctElement).toBeInTheDocument();
    expect(alertElement).toHaveAttribute('class', 'alert increase');
    expect(arrowElement).toHaveAttribute('class', 'rotateLeft90');
});

test('check percentage - decrease', () => {
    const { getByTestId } = render(<Alert item={{...data, pctChange: -25}} />);
    const pctElement = getByTestId('alert-volume');
    const alertElement = getByTestId('alert');
    const arrowElement = getByTestId('alert-arrow');
    expect(pctElement).toBeInTheDocument();
    expect(alertElement).toHaveAttribute('class', 'alert veryLargeDrop');
    expect(arrowElement).toHaveAttribute('class', 'rotateRight90');
});

test('check percentage - no change', () => {
    const { getByTestId } = render(<Alert item={{...data, pctChange: 0}} />);
    const pctElement = getByTestId('alert-volume');
    const alertElement = getByTestId('alert');
    const arrowElement = getByTestId('alert-arrow');
    expect(pctElement).toBeInTheDocument();
    expect(alertElement).toHaveAttribute('class', 'alert nochange');
    expect(arrowElement).toHaveAttribute('class', 'rotateLeft90');
});

test('check urls', () => {
    const { getByTestId } = render(<Alert item={{...data, url: 'url', logoUrl: 'logo'}} />);
    const urlElement = getByTestId('alert-url');
    expect(urlElement).toHaveAttribute('href', 'url')
    const logoUrlElement = getByTestId('alert-logo-url');
    expect(logoUrlElement).toHaveAttribute('src', 'logo');
});
