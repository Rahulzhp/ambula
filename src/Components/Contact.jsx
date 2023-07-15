import React, { useState } from 'react'
import "../Styles/Contact.css"
import { Image } from '@chakra-ui/react';
import contst from "../Images/contact.webp"
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic to handle form submission here
        // You can send the form data to a server or perform any other actions
        console.log('Form submitted:', { name, email, message });

        // Clear the form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <div id='contact' className="contact-page">
            <div> <h1>Contact Us</h1></div>

            <div className='contact'>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                placeholder='Enter Name'
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                placeholder='Enter Email'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                        <br />
                        <label>
                            Message:
                            <textarea
                                placeholder='Enter Message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <Image src={contst}></Image>
                </div>
            </div>

        </div>
    )
}

export default Contact