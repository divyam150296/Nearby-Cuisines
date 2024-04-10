import { useParams } from 'react-router-dom'

const CreatorDetails = (props) => {
 
  console.log(props.imageArray, 'array', props.details)
  return(
    <div>
      <div className='grid-length'>
        { props.imageArray?.length && props.imageArray.map(ele => 
            <img className='detailed-img' src={ele} />
          // return(<div>{ele}</div>)
        )}
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