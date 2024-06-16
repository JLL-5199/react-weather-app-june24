import './App.css';
import Search from './search.js';
import Weather from './weather.js';

function App() {
  return (
    <div className="App">
      <Weather defaultCity="London"/>
      <a href="https://github.com/JLL-5199/react-weather-app-june24.git">GitHub Repository</a>
    </div>
  );
}

export default App;
