import { useState } from 'react'


function App() {
  
const [results, setresults] = useState('0')

  return (
    <>
      
      <div className='calculator'>

          <div id='display'>{results}</div>
          <input type="text" id='input'/>

          <div className='keypad'>
            <button id="clear">Clear</button>
            <button className='operation'>C</button>
            <button id="divide" className='operation'>&divide;</button>
            <button id='seven'>7</button>
            <button id="eight">8</button>
            <button id='nine'>9</button>
            <button id="multiply" className='operation'>&times;</button>
            <button id='four'>4</button>
            <button id='five'>5</button>
            <button id='six'>6</button>
            <button id="subtract" className='operation'>&ndash;</button>
            <button id='one'>1</button>
            <button id='two'>2</button>
            <button id='three'>3</button>
            <button id="add" className='operation'>+</button>
            <button id='zero'>0</button>
            <button id="decimal">.</button>
            <button id="equals">=</button>
            
          </div>

      </div>

    </>
  )
}

export default App
