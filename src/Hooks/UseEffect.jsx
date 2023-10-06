import React from 'react'
import { useEffect } from 'react'
export default function UseEffect() {


  // useEffect(() => {
  //   const fetchdata = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());
  //   fetchdata.then((data) => console.log(data))
  // })

  function printData() {
   fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((data) => console.log(data))
  }

  return (
    <div>
      <button onClick={printData}>Data</button>

    </div>
  )
}
