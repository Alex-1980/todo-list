import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'
import styles from './Todo.module.css'

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
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={todo.id}
        checked={status === 'completed'}
        onChange={handleUpdate}
      />
      <label className={styles.text} htmlFor={todo.id}>{text}</label>
      <span className={styles.icon}>
        <button
          className={styles.button}
          onClick={handleDelete}
        >
          <FaTrashAlt />
        </button>
      </span>
    </li>
  )
}
