import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';

// ROOT COMPONENT
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
        <div className="flex">
          <Cat colour="#eb9e34" name="Tabitha" lackOfCommonSense="true" />
          <Cat colour="#f2f2d0" name="Mog" lackOfCommonSense="false" />
          <Cat colour="#f2e2d0" name="Sam" lackOfCommonSense="true" />
        </div>
       
        <Dog />
      </header>
    </div>
  );
}

export default App;
