export const useOnlineData = (apiUrl) => {
  console.log(apiUrl)
  const getData = async () => {
    const data = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=${apiUrl}&location=&isMobile=0`)
    const jsonData = await data.json()
    return jsonData
    // setOnlineData(jsonData)
  }

  return getData()
}

export const featuredData = (apiUrl) => {
  const getData = async () => {
    const data = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=${apiUrl}&location=&isMobile=0`)
    const jsonData = await data.json()
    return jsonData
    // setOnlineData(jsonData)
  }

  return getData()
}

export default ''