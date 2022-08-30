import { Routes, Route } from "react-router-dom";
import HomeContainer from './components/homeContainer/HomeContainer';
import LoginContainer from "./components/loginContainer/LoginContainer";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeContainer /> } />
        <Route path="/login" element={ <LoginContainer /> } />
      </Routes>
    </div>
  );
}

export default App;