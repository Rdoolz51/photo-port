import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    test('renders', () => {
        render(<Nav />);
    });

    test('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    test('inserts emoji into the h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    test('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
});