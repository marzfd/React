import { render, screen } from '@testing-library/react';
import DogGallery from '../DogGallery';

test(
  'DogGallery renders correctly',
  () => {
    render(<DogGallery />);
    expect(screen.getByText('Get your first dog by clicking the button !')).toBeInTheDocument();
  }
)