import axios from 'axios';
import './App.css';


function App() {
  const onLogin = async () => {
    // const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0LHh1Y3hpY2hib0Bkb2l2bC5jb20iLCJyb2xlcyI6IltST0xFX0FETUlOLCBST0xFX1RSQUlORUVdIiwiaXNzIjoiRzIzIiwiaWF0IjoxNjY0NDE5NzE4LCJleHAiOjE2NjQ0MjMzMTh9.OZR8jaGxHlIXd3X9nUGxGTDH5qb8xfB0MPQPtFTAJUDDYWPR46ShqMWTjWUNyVXSOjQKS-EmL33dkvTY9U73SQ"
    // const data = await axios.get('https://lms-app-1.herokuapp.com/auth/login', { headers: { Authorization: `Bearer ${token}` } });
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxdWFuIiwicGF5bG9hZCI6eyJyb2xlTmFtZSI6IkNBTkRJREFURSJ9LCJpc3MiOiJIUl9URUFNIiwiZXhwIjoxNjY0ODc2OTAwLCJpYXQiOjE2NjQ4Njk3MDB9.WaVLeB9iUc3WO7yA-J-N3nOQsA2tLr-_IVMaByL9WI9DRBMcuh_wJzNnYT-9o9rPKPLjNqUSplcQLZH_Pm_h9w"
    const data = await axios.get('http://localhost:8080/api/profile/get', { headers: { Authorization: `Bearer ${token}` } });
    console.log(data);

  }

  return (
    <div className="App">
      <button onClick={onLogin}>Test Login</button>
    </div>
  )
}

export default App
