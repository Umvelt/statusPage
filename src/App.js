import logo from './logo.svg';
import './App.css';
import ColorWordSwitcher from "./Components/ColorWordSwitcher";
import TimerCounterComponent from './Components/TimerCounterComponent';
import DateTimeAndEarnings from './Components/DateTimeAndEarnings';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My React App!</h1>
        </header>
        <div className="content">
          <ColorWordSwitcher />
          <TimerCounterComponent />
          <DateTimeAndEarnings />
        </div>
      </div>
  );
}

export default App;
