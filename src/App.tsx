import { useQuery } from '@tanstack/react-query';
import { User, getUsers } from '@apis';
import './App.scss';

interface Props {
  name: string;
  email: string;
}

function ListItem(props: Props) {
  return (
    <li>
      Name {props.name}
      Email {props.email}
    </li>
  );
}

function App() {
  const { data } = useQuery<User[], Error>(['users'], getUsers, {
    initialData: [],
  });

  return (
    <ul>
      {data?.map((user: User) => (
        <ListItem key={user.id} name={user.name} email={user.email} />
      ))}
    </ul>
  );
}

export default App;
