import { useState } from 'react';
import { Toolbar } from './components/Portfolio/portfolio'
import './App.css'



const App = () => {
  const [state, setState] = useState('All')

  return (
    <div className='main'>
      <div className='buttons'>
        <button onClick = {() => setState('All')}>All</button>
        <button onClick = {() => setState('Websites')}>Websites</button>
        <button onClick = {() => setState('Flayers')}>Flayers</button>
        <button onClick = {() => setState('Business Cards')}>Business Cards</button>
      </div>
      <div>
        <Toolbar filter={state}/>
      </div>
    </div>
  )
}

export default App
