import { Routes, Route } from "react-router-dom";
import HomeContainer from './components/homeContainer/HomeContainer';
import LoginContainer from "./components/loginContainer/LoginContainer";
import Account from "./components/account/Account";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeContainer /> } />
        <Route path="/login" element={ <LoginContainer /> } />
        <Route path="/account" element={ <Account /> } />
      </Routes>
    </div>
  );
}

export default App;