import React, { useEffect, useState } from 'react'
import './Task.css'
import { Check, Trash2, Pencil, Loader2 } from 'lucide-react';
import {Link} from 'react-router-dom'
import { wait } from '../lib/utils';
import { error, success } from '../lib/notification';

export const Tasks = () => {
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState([])
    const [editIndex, seteditIndex] = useState(-1)
    const [onClickCheck, setonClickCheck] = useState(false)

    useEffect(() => {
        //settodos(localStorage.getItem('todos'))
        console.log("aa")
        const todosStorage = JSON.parse(localStorage.getItem('todos'))
        settodos(todosStorage)
    }, [todo]) //[] --> only when the page is up. when refresh, again.


    const handleAddTodo = async () => {
        if (!todo) return; /*if todo is empty (no input and pressed check*/
        setonClickCheck(true)
        await wait (200)


        try{
            if (editIndex === -1) {
                const newTodos = [...todos, todo]
                localStorage.setItem('todos', JSON.stringify(newTodos))
                success('המשימה הושלמה בהצלחה')
            }
            else {
                todos[editIndex] = todo;
                localStorage.setItem('todos', JSON.stringify(todos))
                seteditIndex(-1);
            }
            settodo('');
        } catch(err) {
            error(err?.massage)
        }finally{
            setonClickCheck(false)
        }
    }

    const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        settodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos))
    }

    const handleEditTodo = (index) => {
        settodo(todos[index]);
        seteditIndex(index);
    }


    return (
        <div className='container'>
            <div >
                <input
                    onChange={({ target }) => settodo(target.value)}
                    value={todo}
                    className='task-input' placeholder='Add a new task....'
                    disabled={onClickCheck}
                    onKeyDown={(e)=>{
                        if(e.key === 'Enter'){
                            handleAddTodo()
                        }
                    }}
                    />
                    {!onClickCheck ? (
                    <Check
                    onClick={handleAddTodo}
                    className='task-icon'
                    style={{ cursor: todo ? 'pointer' : 'not-allowed' }}
                        />
                    ) : (<Loader2 className='task-icon' />)}

                    
                
                
            </div>
            <div className='todos-wrapper'>
                {todos?.map((todo, index) => (
                    <div className='todo-item' key={index}>
                        <Link to={`/todo/${index}`} className='todo-link'>

                            <span>
                                {index + 1}. {todo}
                            </span>
                        </Link>
                        <div>
                            <Trash2 onClick={() => handleDeleteTodo(index)} className='icons' />
                            <Pencil onClick={() => handleEditTodo(index)} className='icons' />
                        </div>
                    </div>
                ))} 
                <div className='todo-item'>
                    {(editIndex === -1 && onClickCheck) && <span style={{opacity:0.5}}>
                        {todos.length + 1},{todo}
                    </span>}
                </div>


            </div>
        </div>
    )
}

