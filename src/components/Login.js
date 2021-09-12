import React, {useState} from 'react'
import Validation from './Validation'



const Login = () => {

    const[inputVal, setInputVal] = useState({
        email: "",
        password: ""

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
            <h2>Student Login</h2>
            <form>
            <input type="email" 
                    placeholder="Enter Your E-mail Address" 
                    name = "email" 
                    className="w-50 py-2 m-2" 
                    value = {inputVal.email} 
                    autoComplete = "off"
                    onChange={handleChange}/>{errors.email && <p className = "error">{errors.email}</p>}

                <input type="password" 
                    placeholder="Enter Your Password" 
                    name = "password" 
                    className="w-50 py-2 m-2"  
                    value = {inputVal.password}
                    onChange={handleChange}
                    autoComplete = "off"
                />{errors.password && <p className = "error">{errors.password}</p>}
                <button class="btn btn-primary w-50 py-2 m-2" type="submit" onClick = {handleFormSubmit}>Submit form</button>
                </form>
            </div>
        </div>
    )
}

export default Login
