import { useState } from 'react'
import { Link } from "react-router-dom"
import { logoUrl } from '~/src/utils/dummyData'
import { action } from '~/src/store/counter.js'

// import { authorizationSliceAction } from '~/src/store/index.js'
// import { productCartAction } from '~/src/store/productCart.js'
import { useDispatch, useSelector } from 'react-redux'

const Header = () => {
  
  const dispatch = useDispatch()
  const totalProduct = useSelector(state => state.productCardStore.totalQuantity)
  console.log(useSelector(state => state.productCardStore.totalQuantity))
  // const auhenticationStatus = useSelector((state) => state.authorization.authourized)
  // const carttData = useSelector((state) => state.productCart.cartItem)
  const [btnText, setBtnText] = useState('Login')
  const dynamicUrl = '/dynamic'
  const updateAuthenticateStatus = () => {
    console.log('updating the status')
  }

  const updateCounterCount = () => {
    console.log('update aount')
    dispatch(action.incrementCounter())
  }

  return (
    <div className='flex justify-between'>
      <div className='logo-container'>
        <img src={logoUrl} className='logo w-48' />
      </div>
      {/* <div>{carttData.map(ele => <div key={ele.id}>{ele.quantity}</div>) }</div> */}
      <div className='nav-items flex'>
        <ul className='flex items-center'>
          <li className='p-2.5 m-2.5'><Link to='/'>Home</Link></li>
          <li className='p-2.5 m-2.5' onClick={updateCounterCount}>About Us</li>
          <li className='p-2.5 m-2.5'>Contact Us</li>
          <div className='p-2.5 m-2.5 flex'>
            <div>Cart</div>
            <div className='text-sm ml-1 rounded-full px-1 border-2 border-[green]'>{totalProduct}</div>
          </div>
          <li className='p-2.5 m-2.5'><Link to={dynamicUrl}>Dynamic</Link></li>
          <div className='btn-section'>
            {/* <button className={`${auhenticationStatus ? 'bg-red-400': 'bg-sky-400'} rounded-2xl p-1.5`} onClick = {() => { updateAuthenticateStatus()}}  >
              { (auhenticationStatus) ? 'Logout': 'Login' }
            </button> */}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Header