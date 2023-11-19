import React, { useState } from 'react';
import './App.css'

const Header = () => {
  return<>
  <h2 className='titulo'>CALCULADORA CIENTÍFICA</h2>
  </>
  
}

const App = () => {
  const [result, setResult] = useState(0);
  const handleClic = (e) => {
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  }

  const calcular = () => {
    try{
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
    
  }
  return (
    <>
      <div className='container'>
        <Header />
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className='operacion' onClick={clear} id="clear">Clear</button>
          <button className='operacion' onClick={backspace} id="backspace">C</button>
          <button className='operacion' name="/" onClick={handleClic}>&divide;</button>
          <button name="7" onClick={handleClic}>7</button>
          <button name="8" onClick={handleClic}>8</button>
          <button name="9" onClick={handleClic}>9</button>
          <button className='operacion' name="*" onClick={handleClic}>&times;</button>
          <button name="4" onClick={handleClic}>4</button>
          <button name="5" onClick={handleClic}>5</button>
          <button name="6" onClick={handleClic}>6</button>
          <button className='operacion' name="-" onClick={handleClic}>&ndash;</button>
          <button name="1" onClick={handleClic}>1</button>
          <button name="2" onClick={handleClic}>2</button>
          <button name="3" onClick={handleClic}>3</button>
          <button name="+" className='operacion' onClick={handleClic}>+</button>
          <button name="0" onClick={handleClic}>0</button>
          <button name="." onClick={handleClic}>.</button>
          <button className='operacion' onClick={calcular} id='result'>=</button>
        </div>
      </div>
      
    </>
  )
}

export default App
