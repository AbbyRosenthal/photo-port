import React from 'react';
import {render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//after each test, no leftover memory data for false results
afterEach(cleanup)

describe('About component', () => {
    //renders About test

    //FIRST test
    //string declares what is being tested, callback runs the test
it('renders', () => {
    render(<About />);
});
    //SECOND test
it('matches snapshot DOM node structure', () => {
    //render About
    const { asFragment } = render(<About />)
    expect(asFragment()).toMatchSnapshot();
})
})