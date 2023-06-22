import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'

export default function Todo({todo, onUpdate, onDelete}) {
  const {text, status} = todo;
  const handleUpdate = (e) => {
    const status = e.target.checked ? 'completed' : 'active'
    onUpdate({...todo, status})
  }
  const handleDelete = () => {
    onDelete(todo)
  }

  return (
    <li>
      <input
        type="checkbox"
        id={todo.id}
        checked={status === 'completed'}
        onChange={handleUpdate}
      />
      <label htmlFor={todo.id}>{text}</label>
      <button
        onClick={handleDelete}
      >
        <FaTrashAlt />
      </button>
    </li>
  )
}
