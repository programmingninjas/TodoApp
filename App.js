import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodos;
  let initFlags;
  if (localStorage.getItem("todos") === null) {
    initTodos = []
    initFlags = []
  }
  else {
    initTodos = JSON.parse(localStorage.getItem("todos"))
    initFlags = JSON.parse(localStorage.getItem("flags"))
  }
  let [todoslist, setTodoslist] = useState(initTodos)
  let [flags, setFlags] = useState(initFlags)
  const onDelete = (snum) => {
    setTodoslist(todoslist.filter((e) => { return e !== todoslist[snum] }));
    flags.splice(snum, 1)
    setFlags(flags)
  }
  const addTodo = (todo) => {
    setTodoslist([...todoslist, todo])
    setFlags([...flags, false])
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoslist));
  }, [todoslist])
  useEffect(() => {
    localStorage.setItem("flags", JSON.stringify(flags));
  }, [flags])
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Todos todoslist={todoslist} onDelete={onDelete} flags={flags} setFlags={setFlags} />} />
        <Route path='/addtodo' element={<AddTodo addTodo={addTodo} />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
