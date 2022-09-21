import { useUserInfo } from '@apis';
import { Card, CardBottom, Welcome } from '@components';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { isSuccess, isLoading, isError, data } = useUserInfo();

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
            <CardBottom
              onClick={() => navigate('followers')}
              label="Followers"
              value={data.followers}
            />
          }
          center={
            <CardBottom
              onClick={() => navigate('repositories')}
              label="Repositories"
              value={data.public_repos}
            />
          }
          right={
            <CardBottom
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
