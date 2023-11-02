import { render } from '@testing-library/react';
import LastUpdated from './LastUpdated';

test('check snapshot', () => {
    const { asFragment } = render(<LastUpdated time="10:30" />);
    expect( asFragment() ).toMatchSnapshot();
});

