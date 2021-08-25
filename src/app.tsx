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
import { AppWrapper } from "./styles/AppStyles";

type AppProps = {
  todoRepository: TodoMemoryRepository,
  todoManager: TodoManager
  onlineTodoGateway: OnlineTodoGateway
}

export const App = ({todoRepository, todoManager, onlineTodoGateway}:AppProps) => {  
  
  const [todos, setTodos] = useState([] as Todo[])
  const [counts, setCounts] = useState({total: 0, active: 0, completed: 0})

  useEffect(() => {
    todoRepository.fetchTodosOnline(onlineTodoGateway).then(() => {
      updateState()
    })
  }, [])

  const updateState = () => {
    setTodos([...todoRepository.getAllTodos()])
    setCounts({
      total: todoRepository.allTodosQuantity(),
      active: todoRepository.activeTodosQuantity(),
      completed: todoRepository.completedTodosQuantity()
    })
  }

  const handleTodoRegister = (title: string) => {
    todoManager.createNewTodo(title)
    updateState()
  }

  const handleTodoCheck = (todoID: string) => {
    todoManager.toggleDoneTodo(todoID)
    updateState()
  }

  const handleTodoDelete = (todoID: string) => {
    todoManager.removeTodo(todoID)
    updateState()
  }

  const handleTodoCheckAll = () => {
    todoManager.toggleDoneAllTodos()
    updateState()
  }

  const handleTodoEditTitle = (todoID: string, newTitle: string) => {
    todoManager.changeTodoTitle(todoID, newTitle)
    updateState()
  }

  const handleCleanCompleted = () => {
    todoRepository.removeCompletedTodos();
    updateState();
  }

  return (
    <AppWrapper>
      <TitleHeader />
      <TodoRegister onTodoRegister={handleTodoRegister} onTodoCheckAll={handleTodoCheckAll}/>
      <TodoDisplay todos={todos} onTodoCheck={(todoID: string) => handleTodoCheck(todoID)} onTodoDelete={(todoID: string) => handleTodoDelete(todoID)} onEditTitle={(todoID: string, newTitle: string) => handleTodoEditTitle(todoID, newTitle)}/>
      <StatusBar itemsQuantity={counts.total} itemsLeft={counts.active} anyToClean={counts.completed > 0 ? true : false} onCleanCompletedClick={handleCleanCompleted}/>
    </AppWrapper>
  );
}
