import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import IcecreamContainer from './components/icecreamContainer';
import CakeContainer from './components/CakeContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className='App'>
        <Provider store={store}>
           <CakeContainer/>
           <HooksCakeContainer/>
           <IcecreamContainer/>
           {/* <UserContainer/> */}
        </Provider>
        </div>
  );
}

export default App;
