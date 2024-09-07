import logo from './assets/pp-logo-vertical.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Welcome to the future of insurance verification.</code>
        </p>
        <a
          className="App-link"
          href="https://www.home.usestratus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          thepatientpass.com
        </a>
      </header>
    </div>
  );
}

export default App;
