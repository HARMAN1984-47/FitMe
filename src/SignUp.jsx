import { Link,useNavigate} from 'react-router-dom';
import {useState} from 'react'

import {ToastContainer} from 'react-toastify'
import {handleError,handleSuccess} from './utils'
import './SignUp.css'
function SignUp() {


  const navigate = useNavigate();
  const [signUpInfo,setSignupInfo]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange =(e)=>{
    const {name,value}= e.target;
    console.log(name,value);
    const copySignInfo = {...signUpInfo};
    copySignInfo[name] = value;
    setSignupInfo(copySignInfo);



  }
  const handleSignUp = async(e)=>{
    e.preventDefault();
    const {name,email,password} = signUpInfo;
    if(!name||!email||!password){
      return handleError("Please fill all the fields")
    }
    try{
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url,{
      
      method:"POST",
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(signUpInfo)
    }
      );
      const result = await response.json();
      const {success,message,error} = result;
      if(success){
        handleSuccess(message)
        setTimeout(()=>{
          navigate('/login')
        },1000)
      }else if(error){
        const details = error?.details[0].message
        handleError(details)
      }
      console.log(result)

    }catch(err){
      handleError(err)

    }
  }
  console.log(signUpInfo)

  return (
    <div className="container">
      <h1>SignUp</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="name">Name</label>
          <input
          onChange={handleChange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your name..."
            value= {signUpInfo.name}
          />
        </div>
         <div>
          <label htmlFor="email">email</label>
          <input
          onChange={handleChange}
            type="email"
            name="email"
            autoFocus
            placeholder="Enter your email..."
            value= {signUpInfo.email}

          />
        </div>
         <div>
          <label htmlFor="password">password</label>
          <input
          onChange={handleChange}
            type="password"
            name="password"
            autoFocus
            placeholder="Enter your password..."
            value= {signUpInfo.password}
          />
        </div>
        <button type='submit'>signup</button>
        <span>Already have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
      <ToastContainer/>
    </div>
  );
}
export default SignUp;
