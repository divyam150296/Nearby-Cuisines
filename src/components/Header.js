import { useState } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from '~/src/utils/dummyData'
import { authorizationSliceAction } from '~/src/store/index.js'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  
  const dispatch = useDispatch()
  const auhenticationStatus = useSelector((state) => state.authorization.authourized)
  const [btnText, setBtnText] = useState('Login')
  const dynamicUrl = '/dynamic'

  const updateAuthenticateStatus = () => {
    console.log('updating the status')
    dispatch(authorizationSliceAction.updateAuthorisation())
  }

  return (
    <div className='flex justify-between'>
      <div className='logo-container jus'>
        <img src={logoUrl} className='logo w-48' />
      </div>
      { auhenticationStatus }
      <div className='nav-items flex'>
        <ul className='flex items-center'>
          <li className='p-2.5 m-2.5'><Link to='/'>Home</Link></li>
          <li className='p-2.5 m-2.5'>About Us</li>
          <li className='p-2.5 m-2.5'>Contact Us</li>
          <li className='p-2.5 m-2.5'>Cart</li>
          <li className='p-2.5 m-2.5'><Link to={dynamicUrl}>Dynamic</Link></li>
          <div className='btn-section'>
            <button className={`${auhenticationStatus ? 'Login': 'bg-gray-100'}`} onClick = {() => { updateAuthenticateStatus()}}  >
              { auhenticationStatus ? 'Login': 'Logout' }
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header