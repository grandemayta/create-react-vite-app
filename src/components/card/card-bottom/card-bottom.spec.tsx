import { render } from '@testing-library/react';
import { CardBottom } from './card-bottom';

test('<CardBottom /> Should render component', () => {
  render(<CardBottom label="Followers" value={200} />);
});
