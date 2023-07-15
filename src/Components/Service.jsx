import React from 'react'
import "../Styles/Service.css"
import easy from "../Images/easy.svg"
import bike from "../Images/bike.svg"
import trst from "../Images/secure.png"

const Service = () => {
    return (
        <div id='service' className='services'>
            <div>
                <h1>About Us</h1>
                <p>This is what makes our product different</p>
            </div>
            <div className='srvicemenu'>
                <div className='serviceitem'>
                    <div>
                        <img src={easy}></img>
                    </div>
                    <div>
                        <h2>Easy to order</h2>
                        <p>Order Online Clothing at a single click and select all Items to order at any poin in time and at ease and comfort</p>
                    </div>
                </div>
                <div className='serviceitem'>
                    <div>
                        <img src={bike}></img>
                    </div>
                    <div>
                        <h2>fast delivery</h2>
                        <p>Electronics Item deliver fast and reliable and get delivered at deliivery time and location any day, any time</p>
                    </div>
                </div>
                <div className='serviceitem'>
                    <div>
                        <img src={trst}></img>
                    </div>
                    <div>
                        <h2>100% quality</h2>
                        <p>We provide quality Brand for you and your loved ones for health and so onnnnnn and for wellness</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service