import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {
  const [show,handleShow] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>100){
          handleShow(true);
      } else handleShow(false);
    });
    return ()=>{
      window.removeEventListener("scroll",null);
    };
  },[]);
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className='nav__logo'
            src="https://cdn.dribbble.com/users/2248943/screenshots/9176243/media/40fdc7e7d6df4588f39fd49ce402ea99.png"
            alt='logo'
        />
    </div>
  )
}

export default Nav