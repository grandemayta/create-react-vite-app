import { User } from '@apis';
import './card.scss';

export function Card({
  name,
  location,
  avatar_url,
  public_repos,
  following,
  followers,
}: User) {
  return (
    <div className="card">
      <img src={avatar_url} />
      <h2>{name}</h2>
      <p>{location}</p>
      <div className="card-divider"></div>
      <ul>
        <li>
          <strong>{followers}</strong>
          <p>Followers</p>
        </li>
        <li>
          <strong>{public_repos}</strong>
          <p>Repositories</p>
        </li>
        <li>
          <strong>{following}</strong>
          <p>Following</p>
        </li>
      </ul>
    </div>
  );
}
