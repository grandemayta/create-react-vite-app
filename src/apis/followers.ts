import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { VITE_USER_URL } from '@constants';

const followersEndpoint = `${VITE_USER_URL}/grandemayta/followers`;

export const useFollowers = (): UseQueryResult<Array<IFollower>, Error> => {
  return useQuery<Array<IFollower>, Error>(['followers'], () =>
    fetch(followersEndpoint).then((response) => {
      if (!response.ok) throw new Error('');
      return response.json();
    })
  );
};
