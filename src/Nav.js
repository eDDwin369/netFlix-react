import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show, setshow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setshow(true)
            } else {
                setshow(false)
            }

        })


    })
    console.log(show);



    return (
        <div className={`nav ${show && "nav-black"}`}>
            <img  style={{width:"150px"}} src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png" alt="" />
        </div>
    )
}

export default Nav