import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { VITE_USER_URL } from '@constants';

const repositoriesEndpoint = `${VITE_USER_URL}/grandemayta/repos`;

export const useRepositories = (): UseQueryResult<
  Array<IRepository>,
  Error
> => {
  return useQuery<Array<IRepository>, Error>(['repositories'], () =>
    fetch(repositoriesEndpoint).then((response) => {
      if (!response.ok) throw new Error('');
      return response.json();
    })
  );
};
