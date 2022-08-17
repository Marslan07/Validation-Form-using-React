import React, {useEffect, useState } from "react";
import "./App.css"
const App =() =>{

  const initialValues={username:"",email:"",password:""}
  const [formValue,setFormValue]=useState(initialValues);
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormValue({...formValue, [name]:value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);
    return initialValues;
  }
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

    const validate=(values)=>{
    const erros={};
    if(!values.username){
      erros.username="username is required!";
    }
    if(!values.email){
      erros.email="email is required!";
    }
    if(!values.password){
      erros.password="password is required!";
    }
    else if(values.password.length < 8){
      erros.password="password must be more than 8 characters!"
    }
    else if(values.password.length > 12){
      erros.password="password cannot be exceed more than 12 characters!"
    }
    return erros;
  }

    return(
      <section className="login-section">
  {Object.keys(formErrors).length === 0 && isSubmit ? (
    alert("you have signed in successfully")
      ) : (
        console.log(JSON.stringify(formValue,undefined,2))
      )}
      <div className="login-wrapper">
      <div className="title">Login Form</div>
      <form >
      <div className="field">
          <label>Username</label>
          <input type="text" 
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={formValue.username}
          />
        </div>
        <p style={{color:"red"}}>{formErrors.username}</p>
        <div className="field">
          <label>Email Address</label>
          <input type="email" 
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={formValue.email}
          />
        </div>
        <p style={{color:"red"}}>{formErrors.email}</p>
        <div className="field">
          <label>Password</label>
          <input type="password"
           name="password"
          placeholder="Enter password"
          value={formValue.password}
          onChange={handleChange}
          />
        </div>
        <p style={{color:"red"}}>{formErrors.password}</p>
        <div className=" btn-login">
          <input type="submit" value="Login" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
    </section>
);
}
export default App
