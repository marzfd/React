import { render, screen } from '@testing-library/react';
import RandomJoke from '../RandomJoke';

test(
  'renders RandomJoke',
  () => {
    render(<RandomJoke />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  }
)
