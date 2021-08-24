import React, { useState, useEffect } from "react";
import { TitleHeader } from "./components/TitleHeader";
import { TodoRegister } from "./components/TodoRegister";
import { TodoDisplay } from "./components/TodoDisplay";
import { StatusBar } from "./components/StatusBar";
import Todo from "./core/model/Todo";
import TodoManager from "./core/services/TodoManager";
import TodoMemoryRepository from "./core/database/TodoMemoryRepository";
import DesafioTodoAPI from "./core/gateways/DesafioTodoAPI";
import ITodoRepository from "./core/services/ITodoRepository";
import { OnlineTodoGateway } from "./core/database/OnlineTodoGateway";

type AppProps = {
  todoRepository: TodoMemoryRepository,
  todoManager: TodoManager
  onlineTodoGateway: OnlineTodoGateway
}

export const App = ({todoRepository, todoManager, onlineTodoGateway}:AppProps) => {  
  
  const [todos, setTodos] = useState([] as Todo[])

  useEffect(() => {
    todoRepository.fetchTodosOnline(onlineTodoGateway).then(() => {
      updateState()
    })
  }, [])

  const updateState = () => {
    setTodos([...todoRepository.getAllTodos()])
  }

  const handleRegister = (title: string) => {
    todoManager.createNewTodo(title)
    updateState()
  }

  const handleTodoClick = (todoID: string) => {
    todoManager.toggleDoneTodo(todoID)
    updateState()
  }

  const handleTodoDelete = (todoID: string) => {
    todoManager.removeTodo(todoID)
    updateState()
  }

  const handleCheckAll = () => {
    todoManager.toggleDoneAllTodos()
    updateState()
  }

  return (
    <section className='wrapper'>
      <TitleHeader />
      <TodoRegister onRegister={handleRegister} onCheck={handleCheckAll}/>
      <TodoDisplay todos={todos} onTodoItemClick={(todoID: string) => handleTodoClick(todoID)} onTodoItemDelete={(todoID: string) => handleTodoDelete(todoID)}/>
      <StatusBar />
    </section>
  );
}
