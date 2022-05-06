import logo from './logo.svg';
import './App.css';
import ReCAPTCHA from 'react-google-recaptcha'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <ReCAPTCHA
        sitekey="6Lf16MsfAAAAAKHpawyY6Zo00TAW_vZboNdhcrZj"
        onChange={e => console.log(e)}
        theme='dark'
      />
      <button onClick={() => console.log()}>Click me</button>

    </div>
  );
}

export default App;
