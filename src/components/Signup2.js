import React, { useState } from 'react'


const Signup2 = ({setCP, setPassword , password, CP , setPage, Photo, setPhoto, AddUser}) => {
   
  return (
    <div className="login" >
      <main>
      <h2 className="heading">Enter Passsword</h2>

      <div>
      <label>Passsword</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Password'
        />
      </div>
      <div>
      <label>Confirm Passsword</label>
        <input
          type="text"
          value={CP}
          onChange={(e) => setCP(e.target.value)}
          placeholder='Confirm Password'
        />
      </div>
      <div>
      <label>Photo</label>
        <input
          type="text"
          value={Photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder='Enter Url of Profile Picture'
        />
      </div>

      <div className='signLink'>
      <button  onClick={() => setPage(1)}>
       <span> Previous</span>
      </button>
    </div>

    <div className='signlink'>
      <button  onClick={AddUser}>
       <span>Confirm</span>
      </button>
    </div>
      </main>
    </div>
  )
}

export default Signup2
