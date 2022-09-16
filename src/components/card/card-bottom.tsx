type MouseEvent = React.MouseEvent<HTMLElement>;

interface CartBottomProps {
  label: string;
  value: number;
  onClick: (event: MouseEvent) => void;
}

export function CartBottom({ label, value, onClick }: CartBottomProps) {
  return (
    <li onClick={onClick}>
      <strong>{value}</strong>
      <p>{label}</p>
    </li>
  );
}
