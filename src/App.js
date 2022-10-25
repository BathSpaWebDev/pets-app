import logo from './logo.svg';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Title from './components/Title';

// ROOT COMPONENT
function App() {
  const cssStyles={
    backgroundColor: 'blue'
  }
  return (
    <div className="App">
      <header className="App-header" style={cssStyles}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Title>
          My title
          {/* This is my first react app, the text inside the Title tags are the children prop */}
        </Title>

        <div className="flex">
          <Cat colour="#eb9e34" lackOfCommonSense={true} textColour="#000"/>
          <Cat colour="#f2f2d0" name="Mog" lackOfCommonSense={false} textColour="#000"/>
          <Cat colour="#f2e2d0" name="Sam" lackOfCommonSense={true } textColour="#000"/>
        </div>

        <div className="flex">
          <Dog name="Fido" colour="#472907" dogYears={4} breed="Alsatian"/>
        </div>
       
        
      </header>
    </div>
  );
}

export default App;
