import { useQuery } from '@tanstack/react-query';
import { User, getUserProfile } from '@apis';
import { Card, Welcome } from '@components';
import './App.scss';

function App() {
  const { data, isLoading, isError } = useQuery<User, Error>(
    ['users'],
    getUserProfile
  );

  return (
    <div className="container">
      <Welcome />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Opps! something was wrong.</p>}
      {data && <Card {...data} />}
    </div>
  );
}

export default App;
