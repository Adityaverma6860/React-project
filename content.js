import { useEffect, useState } from "react"
import React from 'react'

export default function Content() {
const [data, setData]=useState([])

const fetchRemoteData =() => {
  fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then((data) => setData(data));
}
useEffect(()=>{
fetchRemoteData()
},[])

  return (
   <>
{/* <table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Cat</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Rating</th>
      <th scope="col">Rating Count</th>
    </tr>
    
  </thead>


  <tbody>
  {data.map((row,index) => (
    <>
    <tr>
      
      <th scope="row">{index + 1}</th>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.price}</td>
      <td>{row.category}</td>
      <td><img width={30} src={row.image}></img></td>
      <td>{row.description}</td>
      <td>{row.rating.rate}</td>
      <td>{row.rating.count}</td>
    </tr>
    </>
    ))} 
  </tbody>


</table> */}



</>
  );

}
