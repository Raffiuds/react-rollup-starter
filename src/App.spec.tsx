import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

jest.mock('components/HelloWorld/HelloWorld', () => ({
  HelloWorld: jest.fn(() => 'Hello world'),
}));

const setup = () => render(<App />);

describe('App', () => {
  describe('when called the component', () => {
    it('should render component', () => {
      const { getByText } = setup();
      expect(getByText('Hello world')).toBeInTheDocument();
    });
  });
});
