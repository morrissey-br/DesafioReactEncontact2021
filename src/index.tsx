import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import TodoMemoryRepository from "./core/database/TodoMemoryRepository";
import DesafioTodoAPI from "./core/gateways/DesafioTodoAPI";
import TodoManager from "./core/services/TodoManager";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyles } from "./styles/GlobalStyles";


  
const onlineTodoGateway = new DesafioTodoAPI()
const todoRepository = new TodoMemoryRepository()
const todoManager = new TodoManager(todoRepository)


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App todoRepository={todoRepository} todoManager={todoManager} onlineTodoGateway={onlineTodoGateway}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
