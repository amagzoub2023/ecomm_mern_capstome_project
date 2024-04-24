import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
//import navprofileIcon from '../../assets/nav-profile.svg'
const Navbar = () => {
    return (
      <div className='navbar'>
        <img src={logo} alt="logo" />
        <div className="shop-details">
          <p className="shop-name">
            <span style={{ fontStyle: 'italic', color: 'brown', fontWeight: 'bold' }}>Online</span>
            <span style={{ fontStyle: 'italic', color: 'black', fontWeight: 'bold' }}>Shop</span>
          </p>
          <p className="admin-panel">Admin Panel</p>
        </div>
      </div>
    );
  }
  
  export default Navbar;
/*
const Navbar = () => {
  return (
    

    <div className='navbar'>
      <img src={logo} alt="logo" />
      <p>
        <span style={{ fontStyle: 'italic', color: 'brown', fontWeight: 'bold' }}>Online</span>
        <span style={{ fontStyle: 'italic', color: 'black', fontWeight: 'bold' }}>Shop</span>
      </p>
      <p className="admin-panel">Admin Panel</p>
  </div>

  )
}

export default Navbar

*/
// <div className='navbar'>
    //   <img src={navlogo} className='nav-logo' alt="" />
    //   <img src={navprofileIcon} className='nav-profile' alt="" />
    // </div>