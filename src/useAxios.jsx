import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function UseAxios() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=c74970e40cf34fdba2a15eb9c954fa69')
            .then((res) => {
                // console.log(res.data.articles)
                setData(res.data.articles);
            });
    }

    )
    const news = data.map((value, index) => {
        return (
           
                <div key ={index} className="card" style={{ width: '20rem' }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{value.title}</h5>
                        <p className="card-text">{value.description}</p>
                        <a href={value.url} className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        
        )
        
    })

    return (
        <div className='box'>
            {news}
        </div>
    )
}
