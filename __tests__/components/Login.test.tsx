import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Login', () => {
  it('renders username and password input and a login button', () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();

    const passwordInput = screen.getByLabelText(/username/i);
    expect(passwordInput).toBeInTheDocument();

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });
});
