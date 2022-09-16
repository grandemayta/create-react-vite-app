import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = lazy(async () => await import('./pages/home/home'));
const Followers = lazy(async () => await import('./pages/followers/followers'));
const Following = lazy(async () => await import('./pages/following/following'));
const Repositories = lazy(
  async () => await import('./pages/repositories/repositories')
);

export function Router() {
  const router = createBrowserRouter([
    {
      index: true,
      path: '/',
      element: <Home />,
    },
    {
      path: 'followers',
      element: <Followers />,
    },
    {
      path: 'following',
      element: <Following />,
    },
    {
      path: 'repositories',
      element: <Repositories />,
    },
  ]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
