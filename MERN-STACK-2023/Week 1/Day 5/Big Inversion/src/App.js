import './App.css';
import Big_Inversion from './components/Big_Inversion';

function App() {
  return (
    <div className="App">
      <Big_Inversion firstName="Doe" lastName="Jane" age={ 45 } hairColor="Black" />
      <Big_Inversion firstName="Smith" lastName="John" age={ 88 } hairColor="Brown" />
      <Big_Inversion firstName="Fillmore" lastName="Millard" age={ 50 } hairColor="Brown" />
      <Big_Inversion firstName="Smith" lastName="Maria" age={ 62 } hairColor="Brown" />
      
    </div>
  );
}

export default App;
