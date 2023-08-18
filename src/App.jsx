import { useState, useEffect } from 'react'


function App() {

  const [results, setresults] = useState('')
  const [input, setinput] = useState('0')
  const [concat, setconcat] = useState(true)

  useEffect(() => {

    if (input.length > 19) {
      setconcat(false)
    } else setconcat(true)

  }, [input])

  const handleClick = ({ target }) => {

    if (input === '0') {
      setinput(target.name)
      setresults(target.name)
    } else {
      if (concat) { setresults(results.concat(target.name)); setinput(input.concat(target.name)) }
    }

    //if(target.name==='Clear')

  }

  return (
    <>

      <div className='calculator'>

        <div id='display'>{results}</div>
        <div id='input'>{input}</div>

        <div className='keypad'>
          <button id="clear" onClick={handleClick} name='Clear'>Clear</button>
          <button className='operation' onClick={handleClick} name='C'>C</button>
          <button id="divide" className='operation' onClick={handleClick} name='/'>&divide;</button>
          <button id='seven' onClick={handleClick} name='7'>7</button>
          <button id="eight" onClick={handleClick} name='8'>8</button>
          <button id='nine' onClick={handleClick} name='9'>9</button>
          <button id="multiply" className='operation' onClick={handleClick} name='X'>&times;</button>
          <button id='four' onClick={handleClick} name='4'>4</button>
          <button id='five' onClick={handleClick} name='5'>5</button>
          <button id='six' onClick={handleClick} name='6'>6</button>
          <button id="subtract" className='operation' onClick={handleClick} name='-'>&ndash;</button>
          <button id='one' onClick={handleClick} name='1'>1</button>
          <button id='two' name='Clear'>2</button>
          <button id='three' onClick={handleClick} name='3'>3</button>
          <button id="add" className='operation' onClick={handleClick} name='+'>+</button>
          <button id='zero' onClick={handleClick} name='0'>0</button>
          <button id="decimal" onClick={handleClick} name='.'>.</button>
          <button id="equals" onClick={handleClick} name='='>=</button>

        </div>

      </div>

    </>
  )
}

export default App
