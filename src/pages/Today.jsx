import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../components/page-layout.css';

import { FaTrash, FaFlag } from 'react-icons/fa';
import { CiFlag1 } from 'react-icons/ci';
import { IoMdArrowBack } from 'react-icons/io';

export default function Today({
  todos,
  handleToggle,
  handleDelete,
  handleFlagged,
}) {
  const navigate = useNavigate();

  const today = new Date().toISOString().slice(0, 10);

  const todaysTodos = todos.filter(
    (todo) => todo.completed === false && todo.id.slice(0, 10) === today
  );
  return (
    <div className="page">
      <div className="page-layout">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoMdArrowBack style={{ fontSize: '.932rem' }} /> <span>Geri</span>
        </button>
        <h2 className="heading today">Bugün</h2>
        <ul className="todos-ul">
          {todaysTodos.map((todo) => (
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
