import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';

function App() {
  const cssStyles={
    backgroundColor: 'blue'
  }
  return (
    <div className="App">
      <header className="App-header" style={cssStyles}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Hello this is my first React app
        </p>
        <Cat />
        <Dog />
      </header>
    </div>
  );
}

export default App;
