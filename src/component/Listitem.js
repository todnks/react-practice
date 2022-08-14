import axios from "axios"
import React,{ useState } from "react"
const Listitem = () => {
  const [data, setList] = useState([]);
  console.log(data)
  axios.get('https://mariadb-nodejs.herokuapp.com/api/v1/board/list')
  .then((res)=>{
    if (data.length === 0) {
      console.log(data)
      return
    }
    setList(res.data.list)
    console.log(res.data.list)
  })
  
  return(
    <div>{data && data.map((list) => (
      <li
      key={list.idx}
      > 
      {list.content}
      </li>
    ))}</div>
    )
  }
  
  export default Listitem;
