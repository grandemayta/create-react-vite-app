import { render, screen } from '@testing-library/react';
import { CardBottom } from './card-bottom';

test('<CardBottom /> Should render component', () => {
  const label = 'Followers';
  const value = 200;
  render(<CardBottom label={label} value={value} />);

  expect(screen.getByText(label)).toBeInTheDocument();
  expect(screen.getByText(value)).toBeInTheDocument();
});
