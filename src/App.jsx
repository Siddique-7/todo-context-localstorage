import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './assets/contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
  }

 const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id) === todo.id  ? todo : prevTodo))
 }

 const deleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
 }

const toggleComplete = (id) =>{
  setTodos((prev) =>
    prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
    )
  )
}

useEffect(() => {
  const todo = JSON.parse(localStorage.getItem('todos'))

  if (todo && todos.length > 0){
    setTodos
  }
})

export default App
