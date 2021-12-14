import { render, screen } from '@testing-library/react';
import Joke from '../Joke';

test(
  'renders joke',
  () => {
    const joke = {
      icon_url: 'https://assets.chucknorris.host/img/avatar/chuck-norris.png',
      value: 'Chuck Norris can solve the Towers of Hanoi in one move.',
    }
    render(<Joke joke={joke} />);
    expect(screen.getByAltText('icon')).toBeInTheDocument();
  }
)