import React,{useState ,useEffect} from 'react'
import { BrowserRouter as Route , Link } from 'react-router-dom';
import './login.css';

const Userlogin = () => {
    const initialValues = {email: "" , password: ""};
    const [formValues ,setFormValues] = useState(initialValues);
    const [formErrors ,setFormErrors] =useState({});
    const [isSubmit , setIsSubmit] =useState(false);

const handleChange =(e) =>{
    const{name, value} =e.target;
    setFormValues({...formValues ,[name]:value});
    // console.log(formValues);  
}
const handleSubmit =(e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
};
const handleSignin =() =>{
        if(validate){
            <Link to='/' />
        }
}
useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0  && isSubmit){
        console.log(formValues);
    }
},[formErrors])
const validate =(values) =>{
  const errors ={};
  const regex =/^[A-Za-z0-9._%+-]+@tothenew.com$/i;
 
  if(!values.email){
      errors.email ="Email required !";
  }
  else if(!regex.test(values.email)){
      errors.email="Please enter valid email";
  }
  if(!values.password){
      errors.password ="Password is required !";
  }
  return errors ;
};
  return (
    <div className='container Login-layout'>
        <div className='section-login'>
            <div className='right-login'>
            <form  onSubmit={handleSubmit}>            
            <h1>Login To Your Account </h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className='field'>
                    <input type="email" name="email" placeholder='TTN Username' onChange={handleChange} value={formValues.email} required/>
                </div>
                <p className='loginErrors'>{formErrors.email}</p>
                <div className='field'>
                    <input type="password" name="password" 
                    placeholder='Password' onChange={handleChange} 
                    value={formValues.password} pattern ="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$" required/>
                </div>
                <p className='loginErrors'>{formErrors.password}</p>
                 <div className='checkbox'>
                    <input type='checkbox' name='checkbox'  />
                    <span className='login-foot-rm'>Remember Me</span>
                    <span className='login-foot-fp'>Forget Password ? </span>
                 </div>
                <div className='signin-btn'>
                <button type='submit' className=' btn' onChange={handleChange} onClick={handleSignin}>Sign In</button>
                </div>
               
            </div>
        </form>
        </div>
    </div>
    </div>
  )
}

export default Userlogin