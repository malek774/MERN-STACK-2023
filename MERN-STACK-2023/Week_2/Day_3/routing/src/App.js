
import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import Element from './components/Element';
import ElementColor from './components/ElementColor';

function App() {
  const {id} = useParams();
  
  return (
    <div className="App">
      <Routes>
      <Route path="/home" element={ <h1>Welcome</h1> }/>
      <Route path="/:id/" element={ <Element/> }/>
      <Route path="/:id/:textcolor/:backcolor" element={ <ElementColor/> }/>
    </Routes>
    </div>
  );
}

export default App;
