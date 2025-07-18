import React, {useState} from 'react';

function Subtract() {
    let defaultOperands = {first: 12, second: 4};
    const [operands, setOperands] = useState(defaultOperands);

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
            <input type="number" className="right-aligned" value={defaultOperands.first} onChange={updateFirstNumber} /><span id="operand">-</span>
            <input type="number" value={defaultOperands.second} onChange={updateSecondNumber}/><span id="equals">= {result}</span>
        </p>
    );
}

export default Subtract;