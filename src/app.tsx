import React, { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { TodoRegister } from "./components/todo_register/TodoRegister";
import { TodoDisplay } from "./components/todo_display/TodoDisplay";
import { ControlBar } from "./components/control_bar/ControlBar";
import Todo from "./core/model/Todo";
import TodoManager from "./core/services/TodoManager";
import TodoMemoryRepository from "./core/database/TodoMemoryRepository";
import { OnlineTodoGateway } from "./core/database/OnlineTodoGateway";
import { AppWrapper } from "./components/app_wrapper/AppWrapper";
import { Route, BrowserRouter,  useLocation, useRouteMatch, } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/theme/LightTheme";
import { DarkTheme } from "./components/theme/DarkTheme";
import { GlobalStyles } from "./components/global_styles/GlobalStyles";
import { useTranslation } from 'react-i18next'

type AppProps = {
  todoRepository: TodoMemoryRepository,
  todoManager: TodoManager
  onlineTodoGateway: OnlineTodoGateway
}

export const App = ({ todoRepository, todoManager, onlineTodoGateway }: AppProps) => {

  // States config
  const [todos, setTodos] = useState([] as Todo[])
  const [counts, setCounts] = useState({ total: 0, active: 0, completed: 0 })
  const [theme, setTheme] = useState('light')

  // Init state fetch
  useEffect(() => {
    todoRepository.fetchTodosOnline(onlineTodoGateway).then(() => {
      updateState()
    })
  }, [])

  // Router based list
  let location = useLocation<BrowserRouter>()

  useEffect(() => {
    updateState()
  }, [location])

  const updateState = () => {    
    switch (location.pathname) {
      case '/':
        setTodos([...todoRepository.getAllTodos()])
        break;
      case '/active':
        setTodos([...todoRepository.getActiveTodos()])
        break;
      case '/complete':
        setTodos([...todoRepository.getCompletedTodos()])
        break;
    }
    setCounts({
      total: todoRepository.allTodosQuantity(),
      active: todoRepository.activeTodosQuantity(),
      completed: todoRepository.completedTodosQuantity()
    })
  }

  // Theme chosing
  const getTheme = () => {
    switch (theme) {
      case 'light':
        return LightTheme;
      case 'dark':
        return DarkTheme;
      default:
        return LightTheme;
    }
  }

  const handleSwitchModeClick = (darkMode: boolean) => {
    darkMode ? setTheme('dark') : setTheme('light')
  }

  // i18n
  const { i18n } = useTranslation()

  const handleFlagClick = (flag: string) => {
    i18n.changeLanguage(flag)
  }

  // Events
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
    <ThemeProvider theme={getTheme()}>
    <GlobalStyles />
    <AppWrapper>
      <Header activeFlag={i18n.language} darkMode={theme === 'dark'} onFlagClick={(flag: string) => handleFlagClick(flag)} onSwitchModeClick={(darkMode: boolean) => handleSwitchModeClick(darkMode) }/>
      <TodoRegister onTodoRegister={handleTodoRegister} onTodoCheckAll={handleTodoCheckAll} />
      <TodoDisplay todos={todos} onTodoCheck={(todoID: string) => handleTodoCheck(todoID)} onTodoDelete={(todoID: string) => handleTodoDelete(todoID)} onEditTitle={(todoID: string, newTitle: string) => handleTodoEditTitle(todoID, newTitle)} />
      <ControlBar itemsQuantity={counts.total} itemsLeft={counts.active} anyToClean={counts.completed > 0 ? true : false} onCleanCompletedClick={handleCleanCompleted} />
    </AppWrapper>
    </ThemeProvider>
  );
}
