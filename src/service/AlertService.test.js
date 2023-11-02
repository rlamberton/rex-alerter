import getNewAlerts from "./AlertService";

test('check snapshot', () => {
    const results = getNewAlerts();
    expect( results ).toMatchSnapshot();
});