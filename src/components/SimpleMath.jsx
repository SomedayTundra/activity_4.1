import React, { useState } from 'react';

function SimpleMath() {
    let defaultOperands = {first: 12, action:'+', second: 4};
    const[operands, setOperands] = useState(defaultOperands);

    function updateFirstNumber(event) {
        setOperands({first:+event.target.value, action: operands.action, second:operands.second});
    }

    function updateAction(event) {
        setOperands({first:operands.first, action:event.target.value, second:operands.second});
    }

    function updateSecondNumber(event) {
        setOperands({first:operands.first, action:operands.action, second:+event.target.value});
    }

    function updateResult() {
        const {first, action, second} = operands;

        if(action === '+') return first + second;
        else if(action === '-') return first - second;
        else if(action === '*') return first * second;
        else if(action === '/') return first / second;
        else return "-error"
    }

    let result = updateResult();

    return (
         <p>
             <span id={"mathtype"}>DYNAMIC</span>
             <input type="number" className="right-aligned" value={defaultOperands.first} onChange={updateFirstNumber}/>
             <select name="action" id="action" onChange={updateAction}>
                 <option id="add" key={"add"}>+</option>
                 <option id="sub" key={"sub"}>-</option>
                 <option id="mult" key={"mult"}>*</option>
                 <option id="div" key={"div"}>/</option>
             </select>
             <input type="number" value={defaultOperands.second} onChange={updateSecondNumber}/><span id="equals">= {result}</span>
         </p>
     )
}

export default SimpleMath;