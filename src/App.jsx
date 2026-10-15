import { useState } from "react"
import { Header } from "./components/Header"
import { TodoFilter } from "./components/TodoFilter"
import { TodoFooter } from "./components/TodoFooter"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"
import "./index.css"

// Начальные данные для демонстрации UI
const INITIAL_TODOS = [
  { id: 1, text: "Изучить React", completed: true },
  { id: 2, text: "Выполнить контрольную работу", completed: false },
  { id: 3, text: "Прочитать документацию", completed: false },
]

function App() {
  const [todos, setTodos] = useState(INITIAL_TODOS)
  const [inputValue, setInputValue] = useState("")
  const [filter, setFilter] = useState("all")

  // TODO: реализовать добавление задачи
  function handleAdd() {
      const text = inputValue.trim()
      if (text === "") return
      const newTodo = {
          id: Date.now(),
          text: text,
          completed: false
      }
      const newTodos = []
      for (let i = 0; i < todos.length; i++) {
          newTodos.push(todos[i])
      }
      newTodos.push(newTodo)
      setTodos(newTodos)
      setInputValue("")

  }

  // TODO: реализовать переключение статуса задачи
  function handleToggle(id) {
      const newTodos = []
      for (let i = 0; i < todos.length; i++) {
          const todo = todos[i]
          if (todo.id === id) {
              newTodos.push({ id: todo.id, text: todo.text, completed: !todo.completed })
          } else {
              newTodos.push(todo)
          }
      }
      setTodos(newTodos)
  }

  // TODO: реализовать удаление задачи
  function handleDelete(id) {
      const newTodos = []
      for (let i =0; i <todos.length; i++) {
          if (todos[i].id !== id) {
              newTodos.push(todos[i])
          }
      }
      setTodos(newTodos)
  }

  // TODO: реализовать очистку выполненных задач
  function handleClearCompleted() {
      const newTodos = []
      for (let i =0; i < todos.length; i++) {
          if (!todos[i].completed) {
              newTodos.push(todos[i])
          }
      }
      setTodos(newTodos)
  }

  // TODO: реализовать фильтрацию — сейчас возвращаются все задачи
    const filteredTodos = []
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i]
        if (filter === "all") {
            filteredTodos.push(todo)
        } else if (filter === "active" && !todo.completed) {
            filteredTodos.push(todo)
        } else if (filter === "completed" && todo.completed) {
            filteredTodos.push(todo)
        }
    }
    const activeCount = todos.filter((todo) => !todo.completed).length
    const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Header />

        <TodoInput value={inputValue} onChange={setInputValue} onAdd={handleAdd} />

        <TodoFilter activeFilter={filter} onFilterChange={setFilter} />

        <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDelete} />

        <TodoFooter activeCount={activeCount} completedCount={completedCount} onClearCompleted={handleClearCompleted} />
      </div>
    </div>
  )
}

export default App
