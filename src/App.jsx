import { useState, useEffect } from 'react'
import { RP } from './helpers/Regex'


function App() {

  const [results, setresults] = useState('')
  const [input, setinput] = useState('0')
  const [igual, setigual] = useState(false)

  useEffect(() => {

    if (input === '') setinput('0')

  }, [input])

  const handleClick = ({ target }) => {

    switch (target.name) {

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        
      if(igual) break

        if(results[results.length-1]==='0'&&results[results.length-2]==='-'||
        results[results.length-1]==='0'&&results[results.length-2]==='+'||
        results[results.length-1]==='0'&&results[results.length-2]==='*'||
        results[results.length-1]==='0'&&results[results.length-2]==='/'){

          setresults(results.slice(0,results.length-1).concat(target.name))
          setinput(input.slice(0,input.length-1).concat(target.name))
          break
        }
        
        if (input === '0' && results === "" || input === '0') {
          setinput(target.name)
          setresults(target.name)
        } else {
          setresults(results.concat(target.name)); setinput(input.concat(target.name))
        }
        if (input === '/' || input === 'X' || input === '-' || input === '+') setinput(target.name)
        break
      case '.':
        if (igual) break
        if (input === '0' && results === '') { setinput('0.'); setresults('0.'); break }

        if (input[input.length - 1] === '/' || input[input.length - 1] === '+' || input[input.length - 1] === 'X' || input[input.length - 1] === '-') { setresults(results.concat('0.')); setinput('0.'); break }

        if (RP.test(input)) break; else { setresults(results.concat(target.name)); setinput(input.concat(target.name)) }
        break

      case 'Clear':
        setigual(false)
        setresults('')
        setinput('0')
        break

      case '/':

      setigual(false)
        
        if (results[results.length - 1] === '-'
          && results[results.length - 2] === '-'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '+'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '*'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '/') { setinput('/'); setresults(results.slice(0, results.length - 2).concat('/')); break }
        if (results[results.length - 1] === '/' || results[results.length - 1] === '.' || results[results.length - 1] === '+' || results[results.length - 1] === '*' || results[results.length - 1] === '-') { setresults(results.slice(0, results.length - 1).concat('/')); setinput('/'); break }

        if (input === '0' && results === '') break; else {
          setinput('/'); setresults(results.concat(target.name))
        }
        break

      case 'X':

      setigual(false)
      
        if (results[results.length - 1] === '-'
          && results[results.length - 2] === '-'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '+'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '*'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '/') { setinput('X'); setresults(results.slice(0, results.length - 2).concat('*')); break }
        if (results[results.length - 1] === '/' || results[results.length - 1] === '.' || results[results.length - 1] === '+' || results[results.length - 1] === '*' || results[results.length - 1] === '-') { setresults(results.slice(0, results.length - 1).concat('*')); setinput('X'); break }

        if (input === '0' && results === '') break; else {
          setinput('X'); setresults(results.concat('*'))
        }
        break

      case '+':

      setigual(false)
        
        if (results[results.length - 1] === '-'
          && results[results.length - 2] === '-'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '+'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '*'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '/') { setinput('+'); setresults(results.slice(0, results.length - 2).concat('+')); break }
        if (results[results.length - 1] === '/' || results[results.length - 1] === '.' || results[results.length - 1] === '+' || results[results.length - 1] === '*' || results[results.length - 1] === '-') { setresults(results.slice(0, results.length - 1).concat('+')); setinput('+'); break }

        if (input === '0' && results === '') break; else {
          setinput('+'); setresults(results.concat(target.name))
        }
        break

      case '-':

      setigual(false)
       
        if (results === '-') break
        if (results[results.length - 1] === '-'
          && results[results.length - 2] === '-'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '+'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '*'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '/') break

        setinput('-')
        setresults(results.concat(target.name))
        break

      case '=':

      setigual(true)

        if (results[results.length - 1] === '-'
          && results[results.length - 2] === '-'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '+'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '*'
          || results[results.length - 1] === '-'
          && results[results.length - 2] === '/') {

          setresults(eval(results.slice(0, results.length - 2)));
          break
        }

        if (results[results.length - 1] === '/' || results[results.length - 1] === '.' || results[results.length - 1] === '+' || results[results.length - 1] === '*' || results[results.length - 1] === '-') {

          setresults(eval(results.slice(0, results.length - 1)));
          break
        }

        setresults(`${eval(results)}`);

    }

  }

  return (
    <>

      <div className='calculator'>

        <div id='fs'>{results}</div>
        <div id='display'>{igual ? results : input}</div>

        <div className='keypad'>
          <button id="clear" onClick={handleClick} name='Clear'>Clear</button>
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
          <button id='two' name='2' onClick={handleClick}>2</button>
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
