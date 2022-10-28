import { useState } from 'react';
import './App.css';
import Internship from './components/Internship/Internship';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [toogleSelect, settoogleSelect] = useState(3)

  const selected = (index) =>{
    settoogleSelect(index)
  }
  return (
    <div className="App">
      <header className='left'>
      <Navbar toogleSelect={toogleSelect} selected={selected}/>
      </header>
      <section>
      <Internship toogleSelect={toogleSelect}/>
      </section>
    </div>
  );
}

export default App;
