import './App.css';
import Approute from './approute';
import axios from 'axios'

function App() {

  // axios.defaults.headers = {
  //   "Accept": "application/json",
  //   "Content-Type": "application/json",
  //   "Access-Control-Allow-Origin": "*",
  // }

  return (
    <div>
      <Approute />
    </div>
  );
}

export default App;
