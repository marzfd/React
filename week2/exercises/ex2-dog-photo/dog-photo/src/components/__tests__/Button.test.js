import { render, screen } from '@testing-library/react';
import Button from "../Button";

test(
  'Button component should render correctly',
  () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  }
)