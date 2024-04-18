import CreatorDetails from '~/src/components/CreatorDetails'
import UserCardClass from '~/src/components/UserCardClass'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useOnlineData from '~/src/utils/useOnlineData'

const Content =  () => {

  const [details, setDetails] = useState([])
  const [ imageArr, setImageArr] = useState([])

  const { city, placeName, info } = useParams()

  console.log(city, placeName, info, useParams(), 'params')

  useEffect(() => {
     fetchData()
  }, [])

  const fetchData = async () => {
    const url = `/${city}/${placeName}/${info}`
    const jsonData = await useOnlineData(url)
    console.log(jsonData)
    const dataFromApi = jsonData?.entities
    setDetails(jsonData)
    console.log(dataFromApi?.IMAGES)
    if (dataFromApi?.IMAGES && dataFromApi?.IMAGES) {
      // dataFromApi?.IMAGES.forEach(element => {
      //   console.log(element)
      // })
      const imageArrs = []
      for(const key in dataFromApi?.IMAGES) {
        if (imageArrs.length < 5) {
          console.log(key, dataFromApi?.IMAGES[key].url)
          imageArrs.push(dataFromApi?.IMAGES[key].url)
          // setImageArr(dataFromApi?.IMAGES[key].url)
        }
      }
      console.log(imageArrs)
      if (imageArrs.length) {
        setImageArr(imageArrs)
      } else {
        console.log('outside')
      }
    }
    // setImages(dataFromApi?.IMAGES)
  }

  console.log(imageArr)

  return (
    <div>
      { imageArr?.length ? <>
      <CreatorDetails
        imageArray={imageArr}
        details={details}
        name="Divyam"
        profession="Software developer"
        age="21"
        nationality="Indian" 
      />
      <UserCardClass name="Divyam" age="25" />
        </> : ''}
    </div>
  )
}

export default Content