import { useSelector } from 'react-redux';
import './styles.css';

export default function App() {
  const state = useSelector((state) => state);

  console.log(state);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
