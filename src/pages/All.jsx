import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../components/page-layout.css';

import { FaTrash, FaFlag } from 'react-icons/fa';
import { CiFlag1 } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io';

export default function All({
  todos,
  handleDelete,
  handleToggle,
  handleFlagged,
}) {
  const navigate = useNavigate();

  const allTodos = todos.filter((todo) => todo.completed === false);
  return (
    <div className="page">
      <div className="page-layout">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoMdArrowBack style={{ fontSize: '.932rem' }} /> <span>Geri</span>
        </button>
        <h1 className="header-all">Tümü</h1>
        <ul className="todos-ul">
          {allTodos.map((todo) => (
            <li className="todos-li" key={todo.id}>
              <span
                className="header"
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                {todo.header}
              </span>
              <p>
                <span
                  className="todo-delete"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                >
                  <FaTrash style={{ fontSize: '1.068rem', color: 'red' }} />
                </span>
                <span
                  className="todo-flagged"
                  onClick={() => {
                    handleFlagged(todo.id);
                  }}
                >
                  {todo.flagged ? (
                    <FaFlag style={{ fontSize: '1.068rem', color: 'orange' }} />
                  ) : (
                    <CiFlag1
                      style={{ fontSize: '1.068rem', color: 'orange' }}
                    />
                  )}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
