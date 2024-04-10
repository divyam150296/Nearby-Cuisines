import { Link } from "react-router-dom"

const ResturantCard = (props) => {

  const styleCard =  {
    backgroundColor: 'yellow'
  }

  const {info, o2FeaturedImage, cardAction  } = props.resData
  const contentUrl = `content${cardAction?.clickUrl}`
  // const hasImage = objectWithData.hasOwnProperty('image');
  return (
    <div className='res-card' style={styleCard}>
      <h3 className='capitalize'>{info?.name}</h3>
      { info?.o2FeaturedImage?.url ? <img  className='image-field' src={info.o2FeaturedImage.url} /> : <p>No data</p>}
      {/* <h4>{ cardAction?.clickUrl }</h4> url */}
      <Link to={contentUrl}> Link to content</Link>
      {/* <h4>{imageUrl || ''}</h4>
      <h6>{deliveryTime}</h6> */}
    </div>
  )
}

export default ResturantCard