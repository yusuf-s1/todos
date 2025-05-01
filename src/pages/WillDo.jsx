import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../components/page-layout.css';

import { CiFlag1 } from 'react-icons/ci';
import { FaFlag, FaTrash } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

export default function WillDo({
  todos,
  handleToggle,
  handleDelete,
  handleFlagged,
}) {
  const navigate = useNavigate();

  const willdoTodos = todos.filter((todo) => todo.list === 'willdo');

  return (
    <div className="page">
      <div className="page-layout">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoMdArrowBack style={{ fontSize: '.932rem' }} /> <span>Geri</span>
        </button>
        <h2 className="heading willdo">Yapacaklarım</h2>
        <ul className="todos-ul">
          {willdoTodos.map((todo) => (
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
