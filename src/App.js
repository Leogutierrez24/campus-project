import { Routes, Route } from "react-router-dom";
import UserProvider from "./components/context/UserContext";
import HomeContainer from './components/homeContainer/HomeContainer';
import AccountLogin from "./components/accountLogin/AccountLogin";
import Account from "./components/account/Account";
import SubjectsContainer from "./components/subjectsContainer/SubjectsContainer";
import UserGradesContainer from "./components/userGradesContainer/UserGradesContainer";
import UserProfileContainer from "./components/userProfileContainer/UserProfileContainer";
import AddExamContainer from "./components/addExamContainer/AddExamContainer";
import AddSubjects from "./components/addSubjects/AddSubjects";
import './App.scss';

function App() {
  return (
    <UserProvider>
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomeContainer /> } />
        <Route path="/login" element={ <AccountLogin /> } />
        <Route path="/account" element={ <Account /> }>
          <Route path="materias" element={ <SubjectsContainer /> } />
          <Route path="calificaciones" element={<UserGradesContainer />} />
          <Route path="perfil" element={ <UserProfileContainer /> } />
          <Route path="inscrip-examenes" element={ <AddExamContainer /> } />
          <Route path="inscrip-materias" element={ <AddSubjects /> } />
        </Route>
      </Routes>
    </div>
    </UserProvider>
  );
}

export default App;