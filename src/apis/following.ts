import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { VITE_USER_URL } from '@constants';

export type IFollowing = IFollower;

const followingEndpoint = `${VITE_USER_URL}/grandemayta/following`;

export const useFollowing = (): UseQueryResult<Array<IFollowing>, Error> => {
  return useQuery<Array<IFollowing>, Error>(['following'], () =>
    fetch(followingEndpoint).then((response) => {
      if (!response.ok) throw new Error('');
      return response.json();
    })
  );
};
