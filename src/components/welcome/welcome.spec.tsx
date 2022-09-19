import { render } from '@testing-library/react';
import { Welcome } from './welcome';

test('<Welcome /> Should render the component', () => {
  render(<Welcome />);
});
