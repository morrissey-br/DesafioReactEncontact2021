import React from "react";
import { TitleHeader } from "./components/TitleHeader";
import { TodoRegister } from "./components/TodoRegister";
import { TodoDisplay } from "./components/TodoDisplay";
import { StatusBar } from "./components/StatusBar";


export default function App() {
  return (
    <section className='wrapper'>
      <TitleHeader />
      <TodoRegister />
      <TodoDisplay />
      <StatusBar />
    </section>
  );
}
