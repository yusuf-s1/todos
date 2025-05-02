import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

/* pages */
import Layout from './pages/Layout';
import Today from './pages/Today';
import All from './pages/All';
import Completed from './pages/Completed';
import Flagged from './pages/Flagged';
import WillDo from './pages/WillDo';
import Doing from './pages/Doing';

import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: new Date().toISOString(),
      header: 'Kargoyu al',
      completed: false,
      list: '',
      flagged: true,
    },
    {
      id: '2',
      header: 'Raporu Hazırla',
      completed: false,
      list: '',
      flagged: false,
    },
    {
      id: '3',
      header: 'Alışveriş',
      completed: false,
      list: '',
      flagged: false,
    },
    {
      id: '4',
      header: 'Filmini Tamamla',
      completed: false,
      list: '',
      flagged: false,
    },
    {
      id: '5',
      header: 'Ödev',
      completed: false,
      list: 'doing',
      flagged: false,
    },
    {
      id: '6',
      header: 'Kitap Bitir',
      completed: false,
      list: 'willdo',
      flagged: false,
    },
  ]);

  const [header, setHeader] = useState('');
  const [list, setList] = useState('');

  function handleAdd() {
    if (header.trim() === '') return;
    const newTodo = {
      id: new Date().toISOString(),
      header: header,
      completed: false,
      list: list,
      flagged: false,
    };

    setTodos([...todos, newTodo]);
    setHeader('');
    setList('');
  }

  function handleToggle(id) {
    const toggleUpdated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(toggleUpdated);
  }

  function handleDelete(id) {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  }

  function handleFlagged(id) {
    const flaggedUpdated = todos.map((todo) =>
      todo.id === id ? { ...todo, flagged: !todo.flagged } : todo
    );
    setTodos(flaggedUpdated);
  }

  return (
    <>
      <Routes>
        <Route
          index
          path="/"
          element={
            <Layout
              todos={todos}
              header={header}
              handleAdd={handleAdd}
              setHeader={setHeader}
              setList={setList}
            />
          }
        />
        <Route
          path="/today"
          element={
            <Today
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleFlagged={handleFlagged}
            />
          }
        />
        <Route
          path="/all"
          element={
            <All
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleFlagged={handleFlagged}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/flagged"
          element={
            <Flagged
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleFlagged={handleFlagged}
            />
          }
        />
        <Route
          path="/willdo"
          element={
            <WillDo
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleFlagged={handleFlagged}
            />
          }
        />
        <Route
          path="/doing"
          element={
            <Doing
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              handleFlagged={handleFlagged}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
