import { useRepositories } from '@apis';
import { Card, CardBottom } from '@components';

function Repositories() {
  const { isSuccess, isLoading, isError, data } = useRepositories();

  return (
    <div className="container">
      <h1>Repositories</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Opps! something was wrong.</p>}
      {isSuccess &&
        data.map(
          ({ id, name, language, watchers_count, open_issues_count, size }) => (
            <>
              <Card
                key={id}
                title={name}
                subTitle={language}
                left={<CardBottom label="Watchers" value={watchers_count} />}
                center={<CardBottom label="Issues" value={open_issues_count} />}
                right={<CardBottom label="Size" value={size} />}
              />
              <div className="space-10"></div>
            </>
          )
        )}
    </div>
  );
}

export default Repositories;
