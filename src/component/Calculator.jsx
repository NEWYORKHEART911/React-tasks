import React, {useState} from 'react';
import styles from './Calculator.css';

function Calculator() {

    const [input, setInput] = useState('');

    function handleButtonClick(button) {
        setInput(input + button);
    }

    const clear = () => {
        setInput('');
    }

    const calculate = () => {
        //handle errors
        try {
            const calculatedResult = eval(input);
            setInput(calculatedResult);
        } catch {
            console.log('error');
        }
    }

    return(
        <div>
            <div>
                <p>Calculator</p>
                <span class="input">{input}</span>
            </div>
            <div class="calcCont">
                <button class="calcbtn" onClick={() => handleButtonClick('1')}>1</button>
                <button class="calcbtn" onClick={() => handleButtonClick('2')}>2</button>
                <button class="calcbtn" onClick={() => handleButtonClick('3')}>3</button>
                <button class="calcbtn" onClick={() => handleButtonClick('+')}>+</button>
                <button class="calcbtn" onClick={() => handleButtonClick('4')}>4</button>
                <button class="calcbtn" onClick={() => handleButtonClick('5')}>5</button>
                <button class="calcbtn" onClick={() => handleButtonClick('6')}>6</button>
                <button class="calcbtn" onClick={() => handleButtonClick('-')}>-</button>
                <button class="calcbtn" onClick={() => handleButtonClick('7')}>7</button>
                <button class="calcbtn" onClick={() => handleButtonClick('8')}>8</button>
                <button class="calcbtn" onClick={() => handleButtonClick('9')}>9</button>
                <button class="calcbtn" onClick={() => handleButtonClick('*')}>*</button>
                <button class="calcbtn" onClick={() => handleButtonClick('0')}>0</button>
                <button class="calcbtn" onClick={() => handleButtonClick('/')}>/</button>
                <button class="calcbtn" onClick={clear}>C</button>
                <button class="calcbtn" onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calculator;