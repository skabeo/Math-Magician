import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/Quotes';

describe('Quotes Components', () => {
  it('should render the Quotes component correctly', () => {
    const { container } = render(<Quotes />);
    expect(container).toMatchSnapshot();
  });
});
