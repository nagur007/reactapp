import React, {useState} from 'react'

function Subtraction() {
    const [inputVal1, setInputVal1] = useState("");
    const [inputVal2, setInputVal2] = useState("");
    const [total, setTotal] = useState(inputVal1 + inputVal2);

    const subTwoNumbers = (e) =>{
        setTotal(inputVal1 - inputVal2);
    }
    

    return (
        <div>
            <div className="container m-5 text-center ">
                <h3>The Subtraction of Two Numbers are</h3>
                <input type="number" className="mx-2" value = {inputVal1} placeholder = "0" onChange = {e => setInputVal1(+e.target.value)} id = "val1"/>
                <input type="number" value = {inputVal2} placeholder = "0" onChange = {e => setInputVal2(+e.target.value)} id = "val2"/>
                <h3>{total}</h3>
                <button className = "btn btn-success" onClick = {subTwoNumbers}>Subtraction</button>
                <br /><br /><br /><br /><br /><br />
                <h1>We don't just teach Math, We spark Math Curiosity</h1>
                <p className="text-end">By Neelakantha Bhanu,</p>
                <p>World’s fastest Human Calculator & India’s first MSO Gold Medalist</p>
            </div>
        </div>
    )
}

export default Subtraction
