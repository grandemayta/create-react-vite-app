export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = (): Promise<User[]> => {
  return fetch(BASE_URL)
    .then((response) => response.json())
    .then((data: User[]) => data);
};
