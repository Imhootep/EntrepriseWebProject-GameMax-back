import controller from './gamepad.png';
import logo from './Logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <header className="App-header">
      
        
        <img src={logo} className="App-logo" alt="logo" />

        <img src={controller} className="App-controller" alt="controller" />
        
        
        <input class="login" type="text" placeholder="Login"></input>

        <input class="login" type="text" placeholder="Mot de passe"></input>
        <button> Se connecter</button>
        
      </header>
    </div>
  );
}

export default App;
