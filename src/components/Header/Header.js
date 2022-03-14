import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
         <img
            src={`${process.env.PUBLIC_URL}/images/logo.svg`}
          />
    </div>
  )
}

export default Header;
