import React, { useState } from 'react'
import { useTodos } from '../Store/Todostore';

import "../Styles/Todostyle.css";

function Addtodo() {
    const [title, setTitle] = useState("")
    const { handleAddTodo } = useTodos()
    const [description, setDescription] = useState("")

    const handleFormsubmit = (e) => {
        e.preventDefault()
        handleAddTodo(title, description)
        setTitle('');
        setDescription('');

    }
    return (
        <div className='Addtodo'>
            <form onSubmit={handleFormsubmit}>
                <div>
                    <p>Title</p>
                    <input type="text" placeholder='enter title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                </div>
                <div>
                    <p>Description</p>
                    <textarea placeholder='enter Description' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className='formButton'>
                    <button type="submit">submit</button>
                </div>

            </form>
        </div>
    )
}

export default Addtodo