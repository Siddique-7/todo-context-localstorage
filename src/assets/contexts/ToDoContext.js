import {createContext, useContext} from "react"

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false
    }
  ],
  addTodo : (todo) => {},
  removeTodo: (id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
})

export const useTodo = () => {
return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider