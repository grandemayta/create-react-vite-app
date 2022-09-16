import { useQuery } from '@tanstack/react-query';
import { IFollower, getFollowers } from '@apis';
import { Card } from '@components';

function Followers() {
  const { isSuccess, isLoading, isError, data } = useQuery<Array<IFollower>>(
    ['followers'],
    getFollowers
  );

  return (
    <div className="container">
      <h1>Followers</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Opps Something was wrong!</p>}
      {isSuccess &&
        data?.map(({ id, login, avatar_url }) => (
          <>
            <Card key={id} title={login} image={avatar_url} />
            <div className="space-10"></div>
          </>
        ))}
    </div>
  );
}

export default Followers;
