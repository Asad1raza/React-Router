import React from 'react'

const fetchData=()=>fetch('https://dummyjson.com/users').then((responce)=>responce.json())
const userResource =fetchData();
const RestApi = () => {
  return (
    <div>
      <h1>use API in React js</h1>
    </div>
  )
}

export default RestApi
