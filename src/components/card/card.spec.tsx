import { render, screen } from '@testing-library/react';
import { Card } from './card';

const title = 'Pinco';
const image = 'image.jpg';
const subTitle = 'Lima';
const left = 'left';
const center = 'center';
const right = 'right';

test('<Card /> Should render the Card with required props', () => {
  render(<Card title={title} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});

test('<Card /> Should render the Card with the image and subTitle', () => {
  render(<Card title={title} image={image} subTitle={subTitle} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByText(subTitle)).toBeInTheDocument();
});

test('<Card /> Should render the Card with card bottom Props', () => {
  render(<Card title={title} left={left} center={center} right={right} />);

  expect(screen.getByText(title)).toBeInTheDocument();
});
