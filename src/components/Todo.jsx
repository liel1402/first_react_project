import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { CornerUpLeft, Pencil } from 'lucide-react';
import './Todo.css'

export const Todo = () => {
    const {todoId} = useParams()
    const [todo, settodo] = useState('')
    const navigate = useNavigate()
    console.log(todoId)

    useEffect(() => {
      const todosInStorage = JSON.parse(localStorage.getItem('todos'))
      if(todosInStorage)
      {
          const selectedTodo = todosInStorage[todoId]
          console.log(selectedTodo)
          if(selectedTodo)
          {
            settodo(selectedTodo)
          }
      }
  }, [])
    
  return (
    <div className='container'>
      <h3 className='todo-title'>{todo}</h3>
        <CornerUpLeft className='icons' onClick={()=>
        navigate(-1)}/>  
    </div> //return 1 back. equal to navigate(/task)
    
  )
}
