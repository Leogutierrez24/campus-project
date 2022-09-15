import { Routes, Route } from "react-router-dom";
import UserProvider from "./components/context/UserContext";
import HomeContainer from './components/homeContainer/HomeContainer';
import AccountLogin from "./components/accountLogin/AccountLogin";
import Account from "./components/account/Account";
import Materias from "./components/materias/Materias";
import Calificaciones from "./components/calificaciones/Calificaciones";
import UserData from "./components/userData/UserData";
import AddExam from "./components/addExam/AddExam";
import AddMaterias from "./components/addMaterias/AddaMaterias";
import './App.scss';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeContainer /> } />
        <Route path="/login" element={ <AccountLogin /> } />
        <Route path="/account" element={ <Account /> }>
          <Route path="materias" element={ <Materias /> } />
          <Route path="calificaciones" element={<Calificaciones />} />
          <Route path="perfil" element={ <UserData /> } />
          <Route path="inscrip-examenes" element={ <AddExam /> } />
          <Route path="inscrip-materias" element={ <AddMaterias /> } />
        </Route>
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;