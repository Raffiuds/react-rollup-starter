import { render } from '@testing-library/react';
import React from 'react';

import { HelloWorld } from './HelloWorld';

const setup = () => render(<HelloWorld />);

describe('HelloWorld', () => {
  describe('when called the component', () => {
    it('should render component', () => {
      const { getByText } = setup();
      expect(getByText('Hello world')).toBeInTheDocument();
    });
  });
});
