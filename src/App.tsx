import UserPage from './pages/UserPage.tsx';
import WebApp from '@twa-dev/sdk';

export default function App(){
    WebApp.expand();

    return (
      <UserPage/>
    )

}