import './App.scss';
import HomeContainer from './components/homeContainer/HomeContainer';
import NavbarContainer from './components/navbarContainer/NavbarContainer';

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <HomeContainer />
    </div>
  );
}

export default App;