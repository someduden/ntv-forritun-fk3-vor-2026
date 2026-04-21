import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Greeting } from '../Greeting';

describe('Greeting', () => {
  it('sends a greeting', async () => {
    const user = userEvent.setup();
    render(<Greeting />);

    const input = screen.getByLabelText('Nafn');
    await user.type(input, 'Daniel');
    await user.click(screen.getByRole('button', { name: 'Senda' }));

    expect(screen.getByRole('status')).toHaveTextContent('Halló, Daniel!');
  });
});
