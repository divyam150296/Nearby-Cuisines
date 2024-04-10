import { useState } from 'react'
import { logoUrl } from '~/src/utils/dummyData'

const Header = () => {

  const [btnText, setBtnText] = useState('Login')

  return (
    <div className='header'>
      <div className='logo-container'>
        <img src={logoUrl} className='logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <div className='btn-section'>
            <button className='app-btn' onClick = {
              () => { btnText === 'Login' ? setBtnText('Logout') : setBtnText('Login') }
            }  >
              { btnText }
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header