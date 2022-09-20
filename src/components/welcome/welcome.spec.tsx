import { render, screen } from '@testing-library/react';
import { Welcome } from './welcome';

test('<Welcome /> Should render the component', async () => {
  render(<Welcome />);

  expect(await screen.findAllByRole('listitem')).toHaveLength(8);
});
