import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('contact form renders', () => {
    test('renders', () => {
        render(<ContactForm />);
    });
});

describe('matches snapshot', () => {
    test('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});