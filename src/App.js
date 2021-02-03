import logo from './logo.svg';
import './App.css';
import Photo from './components/Profil/Photo';
import FullName from './components/Profil/FullName';
import Adress from './components/Profil/Address';

function App() {
  return (
    <div className="App">       
  <Photo />
  <FullName />
  <Adress />

    </div>
  );
}

export default App;
