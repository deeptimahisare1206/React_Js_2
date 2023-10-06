import {useEffect, useState } from 'react'
export default function UseState() {

    const [count, setcount] = useState(0);
    
    useEffect(()=>{
        document.title = `count ${count}`
    })
    
        return (
            <div>
                <p>{count}</p>
                <button onClick={()=>{setcount(count + 1)}}>+</button>
                <button onClick={()=>{setcount(count - 1)}}>-</button>
            </div>
        )
    
}
