import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { MdEmail } from "react-icons/md";
import './Login.scss';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";





const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showpassword, setShowPassword] = useState(false);




  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };
    let valid = true;

 
    if (email === "") {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (password === "") {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
      toast.error(newErrors.password)
    }

    setErrors(newErrors);

    if (valid) {
      if (email === "nehahameedp@gmail.com" && password === "neha1234"){
      toast.success('Form submitted successfully');
     
      setTimeout(()=>{
      window.location.href = '/dashboard'
      },3000)

    }else{
      toast.error("invalid email or password")

   
        
      }
    }
  };

  
  const Visibility=()=>{
    setShowPassword(!showpassword)
  }


  return (
    <div className='wrap'>
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <h1>Login</h1>
        <label>Email:</label>
        <input
          type="email" className='user'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span style={{ color: 'red' }}>{errors.email}</span>
        <MdEmail  className='icon1'/>


      

      <div>
        <label>Password:</label>
        <input
          type={showpassword ? "text" : "password"} className='pass'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        
        />
       <span onClick={Visibility} className='icon2'>
          {showpassword ? <FaEye /> : <FaEyeSlash /> }
       </span>
        <span style={{ color: 'red' }}>{errors.password}</span>
       

      </div>

      <button type="submit">Submit</button>
     
      <ToastContainer/>
      </div>
    </form>
    </div>
  );
};

export default Login;