const SkeletalLoading = ({ count = 6 }) => {

  const dummyArray = count && new Array(count).fill(null)

  return(
    <div className="skeletal-container">
      {
        dummyArray.map((_, index) => {
          return  <div key={index} className=""></div>
        })
      }
    </div>
  )
}

export default SkeletalLoading