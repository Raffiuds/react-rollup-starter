import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

const setup = () => render(<App />);

describe('App', () => {
  describe('when called the component', () => {
    it('should render component', () => {
      const { getByText } = setup();
      expect(getByText('Hello world')).toBeInTheDocument();
    });
  });
});
