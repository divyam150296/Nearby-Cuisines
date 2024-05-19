import { useParams } from 'react-router-dom'

const CreatorDetails = (props) => {
 
  console.log(props.imageArray, 'array', props.details)
  const sectionDataBasicInfo = props?.details?.page_data?.sections?.SECTION_BASIC_INFO
  const ratingObject = sectionDataBasicInfo?.rating_new?.ratings
  const ratingColorCode = ratingObject?.DINING?.rating && ratingObject?.DINING?.rating < 4.7 ? 'bg-red-400' : 'bg-green-400'
  return(
    <div>
      <div className='grid-length grid grid-cols-5 gap-x-9 mt-4'>
        { props.imageArray?.length && props.imageArray.map((ele, index) => 
            <img className='object-cover w-full h-40' src={ele} key={index} />
          // return(<div>{ele}</div>)
        )}
      </div>
      <div className='flex justify-between'>
        <h1 className='text-3xl font-semibold'>{sectionDataBasicInfo?.name}</h1>
        <div className='flex justify-between'>
          <div className='flex justify-between items-center'>
            <h2 className='p-1.5 border-2 border-black rounded-lg bg-green-400'>{ratingObject?.DELIVERY?.rating}</h2>
            <div className='px-4'>
              <div>added by</div>
              <div>{ratingObject?.DELIVERY?.reviewCount}</div>
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <h3 className={`p-1.5 border-2 border-black rounded-lg ${ratingColorCode}`}>{ratingObject?.DINING?.rating}</h3>
            <div className='px-4'>
              <div>added by</div>
              <div>{ratingObject?.DINING?.reviewCount}</div>
            </div>
          </div>
        </div>
      </div>
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