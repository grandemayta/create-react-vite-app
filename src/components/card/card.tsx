import './card.scss';

export * from './card-bottom/card-bottom';

interface CardProps {
  title: string;
  subTitle?: string;
  image?: string;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

export function Card({
  title,
  subTitle,
  image,
  left,
  center,
  right,
}: CardProps) {
  const isBottomEnabled = left && center && right;

  return (
    <div className={image ? 'card has-image' : 'card'}>
      {image && <img src={image} />}
      <h2 {...(subTitle && { className: 'has-subtitle' })}>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
      {isBottomEnabled && (
        <>
          <div className="card-divider"></div>
          <ul>
            {left}
            {center}
            {right}
          </ul>
        </>
      )}
    </div>
  );
}
