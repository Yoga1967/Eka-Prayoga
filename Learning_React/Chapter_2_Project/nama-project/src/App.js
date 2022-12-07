import logo from './logo.svg';
import './App.css';
import Title from './Title'
import AutoLayoutExample from './MainPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
              <AutoLayoutExample />
      </header>
    </div>
  );
}

export default App;
