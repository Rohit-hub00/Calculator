import React, { useState } from 'react'
import './App.css';

const App = () => {
    const [result, setresult] = useState("");

    const handleClick = (e) => {
        setresult(result.concat(e.target.name)); 
    }

    const clear = () => {
        setresult("");
    }

    const backspace = () => {
        setresult(result.slice(0, -1))
    }
    
    const calculate = () => {
        try{
            setresult(eval(result).toString());
        } catch(err) {
            setresult("Error")
        }
    }
    return (
        <>
            <div className='container'>
                <form>
                    <input type="text" value={result} />
                </form>
                
                <div className='keypad'>
                    <button className='highlight1' onClick={clear} id="clear">AC</button>
                    <button className='highlight1' onClick={backspace} id="backspace">C</button>
                    <button className='highlight' name='/' onClick={handleClick}>&divide;</button>
                    <button className='highlight2' name='7' onClick={handleClick}>7</button>
                    <button className='highlight2' name='8' onClick={handleClick}>8</button>
                    <button className='highlight2' name='9' onClick={handleClick}>9</button>
                    <button className='highlight' name='*' onClick={handleClick}>*</button>
                    <button className='highlight2' name='4' onClick={handleClick}>4</button>
                    <button className='highlight2' name='5' onClick={handleClick}>5</button>
                    <button className='highlight2' name='6' onClick={handleClick}>6</button>
                    <button className='highlight' name='-' onClick={handleClick}>-</button>
                    <button className='highlight2' name='1' onClick={handleClick}>1</button>
                    <button className='highlight2' name='2' onClick={handleClick}>2</button>
                    <button className='highlight2' name='3' onClick={handleClick}>3</button>
                    <button className='highlight' name='+' onClick={handleClick}>+</button>
                    <button className='highlight2' name='0' onClick={handleClick}>0</button>
                    <button className='highlight2' name='.' onClick={handleClick}>.</button>
                    <button className='highlight' onClick={calculate} id='result'>=</button>  
                </div>
            </div>
        </>
    );
}

export default App;