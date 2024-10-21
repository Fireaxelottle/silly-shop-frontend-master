import React , { useState } from 'react'
import { useSpring , animated } from 'react-spring'
import { Link } from 'react-router-dom'

const Signup = () => {

    const spring = useSpring({
        from: { opacity: 0, y: -10 },
        to: {opacity: 1, y: 0 },
        config: { duration: 1000 },
     }) ;  
        

     const [name, setName] = useState("");
     const [ email, setEmail ] = useState("");
     const [ password, setPassword ] = useState("");
     const [ gender, setGender ] = useState("select gender");

  return (
    <animated.div className="login" style={{...spring}}>
      <main>
      <h2 className="heading">SIGNUP</h2>

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
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your Password'
        />
      </div>
      <div>
        <label>Gender</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div>
        <p>Already have an account?</p>
        <Link to="/login" className='link'>
         <span>Log-In</span>
        </Link>
      </div>
    </main>
    </animated.div>
  )
}

export default Signup
