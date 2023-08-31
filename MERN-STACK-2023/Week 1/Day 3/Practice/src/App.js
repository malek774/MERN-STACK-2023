import './App.css';
import Big_inversion from './Components/Big_inversion';

function App() {
  return (
    <div className="App">
    <Big_inversion firstName="Doe" lastName="Jane" age={ 45 } hairColor="black" /> 
    <Big_inversion firstName="John" lastName="Smith" age={ 88 } hairColor="Brown" /> 
    <Big_inversion firstName="Fillmore" lastName="Millard" age={ 50 } hairColor="Brown" /> 
    <Big_inversion firstName="Smith" lastName="Maria" age={ 8 } hairColor="Brown" /> 

    </div>

  );
}

export default App;
