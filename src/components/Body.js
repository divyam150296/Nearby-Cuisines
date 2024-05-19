import { useState, useEffect } from 'react'
import ResturantCard from '~/src/components/ResturantCard'
import SkeletalLoading from '~/src/components/SkeletalLoading'
import useOnlineData from '~/src/utils/useOnlineData'
import { primarySliceAction } from '~/src/store/index.js'
import { useDispatch, useSelector } from 'react-redux'

const Body = () => {
  const dispatch = useDispatch()
  const storeCounter = useSelector((state) => state.counter.counter)
  const authorizationStatus = useSelector((state) => state.authorization.authourized)
  const [listingData, setListingData] = useState([])
  const [listingFilteredData, setListingFilteredData] = useState([])
  const [ searchData, setSearchData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // const data = await fetch('https://www.zomato.com/webroutes/getPage?page_url=/patna/best-cafes&location=&isMobile=0')
    // const jsonData = await data.json()
    const jsonData = await useOnlineData('/patna/best-cafes')
    console.log(jsonData)
    const dataFromApi = jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT
    console.log(dataFromApi)
    setListingData(dataFromApi)
    setListingFilteredData(dataFromApi)
  }

  if (listingData && listingData.length === 0) {
    const count = 8
    return (
      <div className=''>
        <SkeletalLoading count={count} />
      </div>
    )
  }

  const searchClick = () => {
    // console.log('search click', primarySliceAction, 'author', authorizationStatus)
    dispatch(primarySliceAction.toogleCounter(10))
  }

  return (
    // <div>Hello</div>
    <div className='body'>
      <div className='search' onClick={() => { searchClick() }}>
        Search {storeCounter}
      </div>
        <input type='text' value={searchData} onChange={(e) => {
          setSearchData(e.target.value)
          if (listingData && listingData.length) {
            const filteredList = listingData.filter((ele) => ele.info.name.toLowerCase().includes(e.target.value))
            setListingFilteredData(filteredList)
          }
        }}/>
      <div className='flex justify-start flex-wrap gap-x-0.5'>
      {
      listingFilteredData?.length && listingFilteredData.map((ele) => <ResturantCard resData={ele} key={ele.info.resId}/>)
      }
        </div>
    </div>
  )
}

export default Body