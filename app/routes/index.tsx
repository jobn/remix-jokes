import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import stylesUrl from '../styles/index.css';

export let links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link to="users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export let meta: MetaFunction = () => {
  return {
    title: "Remix: So great, it's funny!",
    description: 'Remix jokes app. Learn Remix and laugh at the same time!',
  };
};
