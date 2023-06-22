import React, { useState } from 'react'
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: '123', text: 'Shopping', status: 'active'},
    {id: '124', text: 'Studying', status: 'active'}
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo])
  const handleUpdate = (updated) => 
    setTodos(todos.map(t => t.id === updated.id ? updated : t))
  const handleDelete = (deleted) =>
    setTodos(todos.filter(t => t.id !== deleted.id))

  return (
    <section>
      <ul>
        {todos.map((item) => (
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