import { FC } from 'react';
import './style.css';
// Module '"@react-hookz/web"' has no exported member 'useCookieValue'.(2305)
import { useCookieValue } from '@react-hookz/web';
// Cannot find module '@react-hookz/web/esm/useCookieValue' or its corresponding type declarations.(2307)
// import { useCookieValue } from '@react-hookz/web/esm/useCookieValue';
// Cannot find module '@react-hookz/web/useCookieValue/index.js' or its corresponding type declarations.(2307)
// import { useCookieValue } from '@react-hookz/web/useCookieValue/index.js';

export const App: FC<{ name: string }> = ({ name }) => {
  const [cookie] = useCookieValue('foo');
  console.log(cookie);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
};
