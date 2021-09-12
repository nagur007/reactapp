const Validation = (inputVal) => {

        let errors = {};

        if (!inputVal.name) {
            errors.name="Name is required"            
        }
        if (!inputVal.username) {
            errors.username="Username is required"            
        }
        if (!inputVal.email) {
            errors.email="Email is required"            
        }else if(!/[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/.test(inputVal.email)){
            errors.email="Invalid email address" 
        }
        if (!inputVal.password){
            errors.password = "Password required"
        }else if(inputVal.password.length < 5){
            errors.password = "Password length max 10 lettrs"
        }
        if (!inputVal.phonenumber) {
            errors.phonenumber="Phone Number is required"            
        }else if(inputVal.phonenumber.length < 10){
            errors.phonenumber = "Phone number must be 10 digits"
        }

    return errors;
}

export default Validation;
