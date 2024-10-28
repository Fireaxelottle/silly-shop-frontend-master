import React from 'react'
import { Link } from 'react-router-dom'

const Signup1 = ({setGender, setEmail, setName, setPage, name, email, gender}) => {
  return (
    <div className="login" >
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
      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div className='signLink'>
      <button to="/signup2" onClick={() => setPage(2)}>
       <span>Next</span>
      </button>
    </div>

    <div className='signLink'>
      <p>Already have an account?</p>
      <Link to="/login" >
       <span>Log-In</span>
      </Link>
    </div>
  </main>
  </div>
  )
}

export default Signup1
