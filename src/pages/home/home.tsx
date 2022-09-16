import { useQuery } from '@tanstack/react-query';
import { IUser, getUserProfile } from '@apis';
import { Card, CartBottom, Welcome } from '@components';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { isSuccess, isLoading, isError, data } = useQuery<IUser>(
    ['users'],
    getUserProfile
  );

  return (
    <div className="container">
      <Welcome />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Opps! something was wrong.</p>}
      {isSuccess && (
        <Card
          key={data.id}
          title={data.name}
          subTitle={data.location}
          image={data.avatar_url}
          left={
            <CartBottom
              onClick={() => navigate('followers')}
              label="Followers"
              value={data.followers}
            />
          }
          center={
            <CartBottom
              onClick={() => navigate('repositories')}
              label="Repositories"
              value={data.public_repos}
            />
          }
          right={
            <CartBottom
              onClick={() => navigate('following')}
              label="Following"
              value={data.following}
            />
          }
        />
      )}
    </div>
  );
}

export default Home;
