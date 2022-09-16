import { fetchWrapper } from './fetchWrapper';
import { IFollowers } from './followers';

export type IFollowing = IFollowers;

export const getFollowing = (): Promise<Array<IFollowing>> => {
  return fetchWrapper(`${import.meta.env.VITE_USER_URL}/grandemayta/following`)
    .then((response) => response.json())
    .then((data: Array<IFollowing>) => data);
};
