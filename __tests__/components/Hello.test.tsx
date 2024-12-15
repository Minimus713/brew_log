import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from '../../components/Hello';

describe('Hello component', () => {
  it('renders a greeting', () => {
    render(<Hello name="Brew Log" />);
    const heading = screen.getByRole('heading', { name: /Hello, Brew Log/i });
    expect(heading).toBeInTheDocument();
  });
});
