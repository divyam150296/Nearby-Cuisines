import { useParams } from 'react-router-dom'

const CreatorDetails = (props) => {
 
  console.log(props.imageArray, 'array', props.details)
  const sectionDataBasicInfo = props?.details?.page_data?.sections?.SECTION_BASIC_INFO
  const ratingObject = sectionDataBasicInfo?.rating_new?.ratings
  return(
    <div>
      <div className='grid-length grid grid-cols-5 gap-x-9 mt-4'>
        { props.imageArray?.length && props.imageArray.map((ele, index) => 
            <img className='object-cover w-full h-40' src={ele} key={index} />
          // return(<div>{ele}</div>)
        )}
      </div>
      <h1>{sectionDataBasicInfo?.name}</h1>
      <h2>{ratingObject?.DELIVERY?.rating}</h2>
      <div>{ratingObject?.DELIVERY?.reviewCount}</div>
      <h3>{ratingObject?.DINING?.rating}</h3>
      <div>{ratingObject?.DINING?.reviewCount}</div>
      {/* <div className='grid-length'>
        <div>elemet</div>
        <div>Hello</div>
      </div> */}
      <div><span>Creator Name</span> :  {props?.name}</div>
      <div><span>Creator Background</span>:  {props?.profession}</div>
      <div><span>Creator age</span>:  {props?.age}</div>
      <div><span>Creator Nationality</span>:  {props?.nationality}</div>
    </div>
  )
}

export default CreatorDetails