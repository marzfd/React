import { render, screen } from '@testing-library/react';
import DogPhoto from '../DogPhoto';

test(
  'DogPhoto component should render a dog image',
  async () => {
    render(<DogPhoto />);
    const image = await screen.findByAltText('dog');
    expect(image).toBeInTheDocument();
  }
)