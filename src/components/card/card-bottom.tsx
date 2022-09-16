type MouseEvent = React.MouseEvent<HTMLElement>;

interface CardBottomProps {
  label: string;
  value: number;
  onClick?: (event: MouseEvent) => void;
}

export function CardBottom({ label, value, onClick }: CardBottomProps) {
  return (
    <li onClick={onClick}>
      <strong>{value}</strong>
      <p>{label}</p>
    </li>
  );
}
