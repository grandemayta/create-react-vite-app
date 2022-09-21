import { useFollowing } from '@apis';
import { Card } from '@components';

function Following() {
  const { isSuccess, isLoading, isError, data } = useFollowing();

  return (
    <div className="container">
      <h1>Following</h1>
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

export default Following;
