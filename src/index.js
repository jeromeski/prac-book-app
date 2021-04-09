import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { store } from './reducers';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';




const rootElement = document.getElementById('root');
ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>,
  rootElement
);
