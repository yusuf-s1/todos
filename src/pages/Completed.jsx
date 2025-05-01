import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../components/page-layout.css';

import { FaTrash } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

export default function Completed({ todos, handleToggle, handleDelete }) {
  const navigate = useNavigate();

  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <div className="page">
      <div className="page-layout">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoMdArrowBack style={{ fontSize: '.932rem' }} /> <span>Geri</span>
        </button>
        <h2 className="heading completed">Tamamlananlar</h2>
        <ul className="todos-ul">
          {completedTodos.map((todo) => (
            <li className="todos-li" key={todo.id}>
              <span
                className="header"
                style={{ color: '#454545' }}
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                {todo.header}
              </span>
              <span
                className="todo-delete"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              >
                <FaTrash style={{ fontSize: '1.068rem', color: 'red' }} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
