import React, {useState} from 'react';

function Subtract() {
    const [operands, setOperands] = useState({ first: 0, second: 0 });

    function updateFirstNumber(event) {
        setOperands((prevOperands) => ({
            first: +event.target.value,
            second: prevOperands.second
        }));
    }

    function updateSecondNumber(event) {
        setOperands((prevOperands) => ({
            first: prevOperands.first,
            second: +event.target.value
        }));
    }

    const result = operands.first - operands.second;

    return (
        <p>
            <span id="mathtype">SUBTRACT</span>
            <input type="number" class="right-aligned" onChange={updateFirstNumber} /><span id="operand">-</span>
            <input type="number" onChange={updateSecondNumber}/><span id="equals">= {result}</span>
        </p>
    );
}

export default Subtract;