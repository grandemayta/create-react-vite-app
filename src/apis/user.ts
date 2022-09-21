import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { VITE_USER_URL } from '@constants';

const userEndpoint = `${VITE_USER_URL}/grandemayta`;

export const useUserInfo = (): UseQueryResult<IUser, Error> => {
  return useQuery<IUser, Error>(['user'], () =>
    fetch(userEndpoint).then((response) => {
      if (!response.ok) throw new Error('');
      return response.json();
    })
  );
};
