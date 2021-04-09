import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import TopNav from './components/TopNav';
import './styles.css';

export default function App() {
  const state = useSelector((state) => state);

  console.log(state, state.auth);

  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}
