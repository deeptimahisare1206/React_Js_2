import React, { useState } from 'react'

export default function Firebase() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        date: ""
    })
    
    const postDataOnFirebase = async (e) => {
        e.preventDefault();
        // alert();
        const data = await fetch('https://data-store-61c2c-default-rtdb.firebaseio.com/DataStore.json',
        {
            method: "post",
            header: "Content-type: application/json",
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                contact: user.contact,
                password: user.password,
                date: user.date
            })
        }
        )
        if (data) {
            setUser({
                name: "",
                email: "",
                contact: "",
                password: "",
                date: ""
            })
        }
        alert("Data Stored Successfully");
    }
    
    const getUserData = (e) => {
        // alert();
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })


    }


    return (
        <div className='All'>
            <h1>FORM</h1>
            <div className='Bigbox'>
                <form method='post'>
                    <div className='data'>
                        Name:<input type="text" name="name" value={user.name} onChange={getUserData} />
                    </div>

                    <div className='data'>
                        Email: <input type="email" name="email" value={user.email} onChange={getUserData} />
                    </div>

                    <div className='data'>
                        Contact: <input type="tel" name="contact" value={user.contact} onChange={getUserData} />
                    </div>

                    <div className='data'>
                        Password: <input type="password" name='password' value={user.password} onChange={getUserData} />
                    </div>

                    <div className='data'>
                        Date of Birth: <input type="date" name='date' value={user.date} onChange={getUserData} />
                    </div>

                    <div className='click'>
                        <button className='button' type="button" onClick={postDataOnFirebase} >SUBMIT</button>
                    </div>

                </form>
            </div>
        </div>
    )


}