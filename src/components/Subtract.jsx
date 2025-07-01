import React, {useState} from 'react';

function Subtract(props) {
    const [operands, setOperands] = useState({ first: 0, second: 0 });

    function updateFirstNumber(event) {
        setOperands({
            first: +event.target.value,
            second: operands.second
        });
    }

    function updateSecondNumber(event) {
        setOperands({
            first: operands.first,
            second: +event.target.value
        })
    }

    const result = operands.first - operands.second;

    return (
        <p>
            <span id="mathtype">SUBTRACT</span>
            <input type="number" onChange={updateFirstNumber} /> -{' '}
            <input type="number" onChange={updateSecondNumber}/> = {result}
        </p>
    );
}

export default Subtract;