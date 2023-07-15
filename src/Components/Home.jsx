import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import largeLogo from "../Images/largeLogo.png"
import "../Styles/Home.css"

const Home = () => {
    const navigate = useNavigate()
    const handleshop = () => {
        navigate("/cart")
    }
    return (
        <div id='home' className='mainContainer'>
            <div className='home'>
                <div>
                    <div className='homeLogo'>
                        <img src={largeLogo} alt="logo"></img>
                    </div>
                    <div className='home_title'>
                        <h3><span>Ambula </span> Introducing a user-friendly app that simplifies your life:  <span>Create tasks, manage your to-do list</span> effortlessly, and categorize items in a snap. <span>Stay organized with ease!</span> </h3>

                    </div>
                    <div className='home_btn'>
                        <Button onClick={handleshop} backgroundColor={"#FF4D00"} padding={"35px"} color={"white"} fontSize={"17px"} borderRadius={"21px"}>Order Now</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home