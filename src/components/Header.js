import { useState } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from '~/src/utils/dummyData'

const Header = () => {

  const [btnText, setBtnText] = useState('Login')
  const dynamicUrl = '/dynamic'
  return (
    <div className='flex justify-between'>
      <div className='logo-container jus'>
        <img src={logoUrl} className='logo w-48' />
      </div>
      <div className='nav-items flex'>
        <ul className='flex items-center'>
          <li className='p-2.5 m-2.5'><Link to='/'>Home</Link></li>
          <li className='p-2.5 m-2.5'>About Us</li>
          <li className='p-2.5 m-2.5'>Contact Us</li>
          <li className='p-2.5 m-2.5'>Cart</li>
          <li className='p-2.5 m-2.5'><Link to={dynamicUrl}>Dynamic</Link></li>
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