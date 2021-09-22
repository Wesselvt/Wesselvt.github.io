import logo from './logo.svg';
import './App.css';

function App({domElement}) {
  const widgetName = domElement.getAttribute("data-name")

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Custom points widget: {widgetName}
        </p>
      </header>
    </div>
  );
}

export default App;
