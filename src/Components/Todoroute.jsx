import React from 'react'
import Addtodo from './Addtodo'
import TodoNav from './TodoNav'
import Todos from './Todos'
import "../Styles/Todostyle.css";
import { TodosProvider } from '../Store/Todostore';

const Todoroute = () => {
    return (
        <TodosProvider>
            <div className='todocontainer'>
                <TodoNav />
                <Addtodo />
                <Todos />
            </div>
        </TodosProvider>
    )
}

export default Todoroute