import logo from './github-icon-1.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera aplicacion con React
        </p>
        <a
          className="App-link"
          href="https://github.com/darko-skc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita mi github
        </a>
      </header>
    </div>
  );
}

export default App;
