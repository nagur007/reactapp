import React, {useState} from 'react'
import Validation from './Validation'



const Registerstudent = () => {

    const[inputVal, setInputVal] = useState({
        name: "",
        username: "",
        email: "",
        phonenumber:""

    })

    const [errors, setErrors] = useState({});

    const handleChange = e =>{
        setInputVal({
            ...inputVal, [e.target.name]: e.target.value,
        });
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        setErrors(Validation(inputVal))
    };

    return (
        <div>
            <div className = "container my-5 text-center">
            <h2>Register Student</h2>
            <form>
                <input type="name" 
                    placeholder="Enter Your Name" 
                    name = "name" 
                    className="w-50 py-2 m-2"  
                    value = {inputVal.name}
                    onChange={handleChange}
                    autoComplete = "off"
                />{errors.name && <p className = "error">{errors.name}</p>}
                <input type="username" 
                    placeholder="Enter Your User Name" 
                    name = "username"  
                    className="w-50 py-2 m-2" 
                    value = {inputVal.username} 
                    autoComplete = "off"
                    onChange={handleChange}/>{errors.username && <p className = "error">{errors.username}</p>}
                <input type="email" 
                    placeholder="Enter Your E-mail Address" 
                    name = "email" 
                    className="w-50 py-2 m-2" 
                    value = {inputVal.email} 
                    autoComplete = "off"
                    onChange={handleChange}/>{errors.email && <p className = "error">{errors.email}</p>}
                <input type="number" 
                    placeholder="Enter Your Phone Number" 
                    name = "phonenumber" 
                    className="w-50 py-2 m-2" 
                    value = {inputVal.phonenumber} 
                    autoComplete = "off"
                    onChange={handleChange}/>{errors.phonenumber && <p className = "error">{errors.phonenumber}</p>}
                {/* <input type="number" placeholder="Enter Your Age" name = "age" className="w-50 py-2 m-2" /><br />              */}
                <button class="btn btn-primary w-50 py-2 m-2" type="submit" onClick = {handleFormSubmit}>Submit form</button>
                </form>
            </div>
        </div>
    )
}

export default Registerstudent
