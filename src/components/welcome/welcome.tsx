import './welcome.scss';

export function Welcome() {
  return (
    <div className="welcome">
      <h1>Create React Vite App</h1>
      <p>
        Tired to configure your project everytime? With this template you can
        find all the basic configurations needed to start a new app from
        scratch.
      </p>
      <ul>
        <li>
          <a href="">React</a>
        </li>
        <li>
          <a href="">React Query</a>
        </li>
        <li>
          <a href="">Typescript</a>
        </li>
        <li>
          <a href="">EsLint + Prettier</a>
        </li>
        <li>
          <a href="">Jest</a>
        </li>
        <li>
          <a href="">Vite</a>
        </li>
        <li>
          <a href="">Server Mock</a>
        </li>
      </ul>
    </div>
  );
}
