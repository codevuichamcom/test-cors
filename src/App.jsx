import axios from 'axios';
import './App.css';


function App() {
  const onLogin = async () => {
    const data = await axios.post('https://lms-app-1.herokuapp.com/auth/login', { email: 'xucxichbo@doivl.com', password: '123456' });
    console.log(data);

  }

  return (
    <div className="App">
      <button onClick={onLogin}>Test Login</button>
    </div>
  )
}

export default App
