import { Link } from "react-router-dom"
import { productAction } from '~/src/store/productCart.js'
import { useDispatch } from 'react-redux'


const ResturantCard = (props) => {

  const styleCard =  {
    backgroundColor: 'yellow'
  }

  const {info, o2FeaturedImage, cardAction  } = props.resData
  const contentUrl = `content${cardAction?.clickUrl}`
  const dispatch = useDispatch()

  const addItemToCart= (item) => {
    // console.log(item)
    // dispatch(productAction.addProductInBasket())
  }
  // const hasImage = objectWithData.hasOwnProperty('image');
  return (
    <div className='bg-slate-50 card-width flex flex-col justify-between items-center'>
      <div className="text-center">
        <h2 className='capitalize font-semibold'>{info?.name}</h2>
        <h4 className="text-center text-xs font-normal">({info?.locality?.address})</h4>
      </div>
      <div>
        { info?.o2FeaturedImage?.url ? <img  className='object-cover w-40 h-40' src={info.o2FeaturedImage.url} /> : <p>No data</p>}
      </div>
      <button onClick={addItemToCart(props.resData)}>Add to Cart</button>
      {/* <h4>{ cardAction?.clickUrl }</h4> url */}
      
      <Link to={contentUrl} className=" text-violet-500"> Take a look -{">"} </Link>
      {/* <h4>{imageUrl || ''}</h4>
      <h6>{deliveryTime}</h6> */}
    </div>
  )
}

export default ResturantCard