import { fetchWrapper } from './fetchWrapper';

export interface IFollowers {
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

export const getFollowers = (): Promise<Array<IFollowers>> => {
  return fetchWrapper(`${import.meta.env.VITE_USER_URL}/grandemayta/followers`)
    .then((response) => response.json())
    .then((data: Array<IFollowers>) => data);
};
