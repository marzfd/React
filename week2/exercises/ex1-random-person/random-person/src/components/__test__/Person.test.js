import { render, screen } from '@testing-library/react';
import Person from '../Person';

test(
  'renders Person',
  () => {
    const person = {
      name: {
        first: 'John',
        last: 'Doe',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/john.jpg',
      },
      email: 'john.doe@example.com'
    }

    render(<Person person={person} />);

    expect(screen.getByText('First Name: John')).toBeInTheDocument();
    expect(screen.getByText('Last Name: Doe')).toBeInTheDocument();
    expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByAltText('John')).toBeInTheDocument();
  }
);
