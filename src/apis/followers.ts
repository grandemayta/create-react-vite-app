import { useQuery, UseQueryResult } from '@tanstack/react-query';

export interface IFollower {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

const followersEndpoint = `${
  import.meta.env.VITE_USER_URL
}/grandemayta/followers`;

export const useFollowers = (): UseQueryResult<Array<IFollower>, Error> => {
  return useQuery<Array<IFollower>, Error>(['followers'], () =>
    fetch(followersEndpoint).then((response) => {
      if (!response.ok) throw new Error('');
      return response.json();
    })
  );
};
