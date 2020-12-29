import logo from './logo.svg';
import './App.css';
import 'memoryjs';
// import GameReader from './utilities/GameReader';

function App() {
  // GameReader.checkKovaaksOpen();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
