import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Apiinstall() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/api/data')
            .then((res) => {
                // console.log(res.data.articles)
                setData(res.data);
            });
    }

    )

    const news = data.map((value, index) => {
        return (
           
                <div key ={index} className="card" style={{ width: '20rem' }}>
                    
                        <h5 className="card-title">{value.name}</h5>
                        <h5 className="card-title">{value.city}</h5>
                        <h5 className="card-title">{value.phone}</h5>
                        <h5 className="card-title">{value.company}</h5>
                    </div>
                
        
        )
        
    })
    return (
        <div className='apidata'>
            {news}
        </div>
    )
}