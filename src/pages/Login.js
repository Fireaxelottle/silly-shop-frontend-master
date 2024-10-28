import React , { useState } from 'react'
import { useSpring , animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Login = () => {

   
        

     const [name, setName] = useState("");
     const [ email, setEmail ] = useState("");

  return (
    <div className="login" >
      <main>
      <h2 className="heading">LOGIN</h2>

      <div>
        <label >Name</label>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}  
        placeholder='Enter your Name'
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your Email'
        />
      </div>

      <div>
        <p>Don't have an account?</p>
        <Link to="/signup" className='link'>
         <span>Sign-Up</span>
        </Link>
      </div>
    </main>
    </div>
  )
}

export default Login
