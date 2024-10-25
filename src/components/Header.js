import React from 'react'


function Header() {
  return (
    <div className='nav-bar'>
      <div className='heading1'>
      <h1 style={{marginRight: '120px', letterSpacing: '5px'}}>Innerpece</h1>
      <p style={{fontSize: '10px', marginLeft:'24px' , letterSpacing: '2px'}}>More Travel More Peace</p>
      </div>

     
       
        <label>Home</label>
        <label >Destinations</label>
        <label>About</label>
        <label >Contact us</label>
        <label>Community</label>

        <div>
        <button className='btn1'>Book an event</button>
        </div>

        
        </div>
  )
}

export default Header
