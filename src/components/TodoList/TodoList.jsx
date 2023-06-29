import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'
import { useEffect } from 'react';

export default function TodoList({filter}) {
  const [todos, setTodos] = useState(
    // [
    // {id: '123', text: 'Shopping', status: 'active'},
    // {id: '124', text: 'Studying', status: 'active'}
    // ]
    () => readTodosFromLocalStorage()
  );

  const handleAdd = (todo) => setTodos([...todos, todo])
  const handleUpdate = (updated) => 
    setTodos(todos.map(t => t.id === updated.id ? updated : t))
  const handleDelete = (deleted) =>
    setTodos(todos.filter(t => t.id !== deleted.id))

  const filtered = getFilteredItems(todos, filter)

  useEffect(() => {
    // store JSON todos in key 'todos'
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
          ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  )
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
  if(filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter)
}