import { useState } from 'react';
import { Toolbar } from './components/Portfolio/portfolio'
import './App.css'



function App() {
  const [state, setState] = useState('All')
  
  function clickHandler (filter: string) {
    setState(filter)
    Toolbar({filter: filter})
  }
  
  return (
    <div className='main'>
      <div className='buttons'>
        <button onClick = {() => clickHandler('All')}>All</button>
        <button onClick = {() => clickHandler('Websites')}>Websites</button>
        <button onClick = {() => clickHandler('Flayers')}>Flayers</button>
        <button onClick = {() => clickHandler('Business Cards')}>Business Cards</button>
      </div>
      <div>
        <Toolbar filter={state}/>
      </div>
    </div>
  )
}

export default App
