import { useDispatch} from "react-redux"
import { productAction } from '~/src/store/productCart.js'

const FeaturedCard = (props) => {
  const cardData = {...props.resData}
  const dispatch = useDispatch()
  const additionInCart = () => {
    const payload = {}
    payload.name = cardData.name
    payload.id = cardData.id
    payload.price = cardData.default_price
    payload.url = cardData?.item_image_url
    console.log('here', payload)
    dispatch(productAction.addProductInBasket(payload))
  }
  return(
    <div className="w-1/5 ml-2 mr-4 mb-4 max-h-80 h-80 bg-[#f4fdf4] rounded-3xl flex flex-col justify-between">
      <div>
        {cardData?.item_image_url && <img className="h-44 w-full object-cover rounded-t-3xl" src={cardData.item_image_url}/>}
        <div className="flex items-center pl-2 pr-2 pt-2">
          {/* <div className="mr-6">Veg</div> */}
          {cardData?.primary_tag_slug && (cardData?.primary_tag_slug === 'veg') ? <div className="mr-6 w-[10px] h-[10] rounded-lg bg-[#40d240]"></div> : <div className="mr-6" />}
          <div>{cardData.name}</div>
        </div>
      </div>
      <div className="line-clamp-3 text-[12px] font-[600] text-[#3e3e3e] pl-2 pr-2">{cardData.desc}</div>
      <div className="text-center pl-2 pr-2 pt-4 pb-6 flex items-center justify-between">
        {cardData?.default_price && <div>Price: ₹{cardData?.default_price}</div>}
        {/* {cardData?.primary_tag_slug && <div>Price: {cardData?.primary_tag_slug}</div>} */}
        <div onClick={additionInCart} className="px-3 py-0.5 bg-[#111211] text-[#fefefe] rounded">Add</div>
      </div>
    </div>
  )
}

export default FeaturedCard