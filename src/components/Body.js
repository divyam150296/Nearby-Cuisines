import { useState, useEffect } from 'react'
import ResturantCard from '~/src/components/ResturantCard'
import FeaturedCard from '~/src/components/FeaturedCard'
import SkeletalLoading from '~/src/components/SkeletalLoading'
import { useOnlineData, featuredData } from '~/src/utils/useOnlineData'
// import { primarySliceAction } from '~/src/store/counter.js'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '~/src/store/productCart.js'
import { sendDataToDatabase } from '~/src/store/productCart.js'

const Body = () => {
  const dispatch = useDispatch()
  const featuredCardFromStore = useSelector((state) => state.productCardStore.featuredProduct)
  const productCart = useSelector((state) => state.productCardStore.productCart)
  // const showCounter = useSelector((state) => state.counters.showCounter)
  const [listingData, setListingData] = useState([])
  const [listingFilteredData, setListingFilteredData] = useState([])
  const [featuredCardData, setFeaturedCardData] = useState([])
  const [ searchData, setSearchData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  let [firstLoad, setFirstLoadData] = useState(true)

  useEffect(() => {
    console.log(productCart, 'roduct cart', firstLoad)
    if (firstLoad) {
      setFirstLoadData(false)
      console.log('inside', firstLoad)
      return
    }
    console.log('here')
    dispatch(sendDataToDatabase('hello'))
  }, [productCart])

  useEffect(() => {
    // fetchData()
    console.log(productCart, 'productcart')
    console.log(listingFilteredData, 'changes in data', featuredCardData, 'fromstore', featuredCardFromStore)
  }, [])

  // console.log(showCounter, 'showing counter')
  const fetchData = async () => {
    const jsonData = await useOnlineData('/patna/best-cafes')
    console.log(jsonData)
    let featuredDataForCard = []
    // https://www.zomato.com/webroutes/getPage?page_url=/bangalore/dominos-pizza-koramangala-5th-block-bangalore/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gUGl6emEiLCJkaXNoX2lkcyI6WyI2ODk4NyJdLCJjdWlzaW5lX2lkcyI6W119fQ%3D%3D&location=&isMobile=0
    await featuredData('/bangalore/la-pinoz-pizza-koramangala-4th-block-bangalore/order').then((value) => {
      const featureData1 = value?.page_data?.order?.menuList?.menus[2]?.menu?.categories[0].category.items
      const featureData2 = value?.page_data?.order?.menuList?.menus[2]?.menu?.categories[1].category.items
      featuredDataForCard = [...featureData1, ...featureData2]
      setFeaturedCardData(featuredDataForCard)
      dispatch(productAction.addFeaturedCard(featuredDataForCard))
    })
    
    const dataFromApi = jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT
    console.log(dataFromApi, 'best cafe data')
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
    // dispatch(primarySliceAction.toogleCounter(10))
  }

  return (
    // <div>Hello</div>
    <div className='body'>
      <div className='search' onClick={() => { searchClick() }}>
        {/* Search {storeCounter} */}
      </div>
        {/* <input type='text' value={searchData} onChange={(e) => {
          setSearchData(e.target.value)
          if (listingData && listingData.length) {
            const filteredList = listingData.filter((ele) => ele.info.name.toLowerCase().includes(e.target.value))
            setListingFilteredData(filteredList)
          }
        }}/> */}
      <div className='flex items-center flex-wrap'>
        {(featuredCardFromStore?.length) ? featuredCardFromStore.map((ele) => 
          <FeaturedCard resData={ele?.item}/>
          // <div>{ele}</div>
        ) : <div>No Data found</div>}
      </div>
      <div className='flex justify-start flex-wrap gap-x-0.5'>
        {
        listingFilteredData?.length && listingFilteredData.map((ele) => <ResturantCard resData={ele} key={ele.info.resId}/>)
        }
      </div>
    </div>
  )
}

export default Body
