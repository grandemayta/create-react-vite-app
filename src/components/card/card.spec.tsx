import { render } from '@testing-library/react';
import { Card } from './card';

test('<Card /> Should render the Card with required props', () => {
  render(<Card title="Pinco" />);
});

test('<Card /> Should render the Card with the image and subTitle', () => {
  render(<Card title="Pinco" image="image.jpg" subTitle="Lima" />);
});

test('<Card /> Should render the Card with card bottom Props', () => {
  render(<Card title="Pinco" left="left" center="center" right="right" />);
});
