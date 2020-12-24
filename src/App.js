import lexivrit from './lexivrit.svg';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lexivrit} className="App-logo" alt="logo" />
        <h1 className="encabezado">LexIvrit</h1>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button type="button" class="btn btn-primary">Ir a Léxico</button>
      </header>
     
    </div>
  );
}

export default App;
