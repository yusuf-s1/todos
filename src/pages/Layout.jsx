import React from 'react';
import { Link } from 'react-router-dom';
/* icons */
import { BsCalendar2DateFill } from 'react-icons/bs';
import { FaInbox, FaCheckCircle, FaCalendarAlt, FaFlag } from 'react-icons/fa';
import { MdOutlineEditNote } from 'react-icons/md';

/* css */
import './Layout.css';

export default function Layout({ header, handleAdd, setHeader, setList }) {
  function handleModal() {
    let modal = document.getElementById('modal');
    if (modal.classList.contains('d-none')) modal.classList.remove('d-none');
    else modal.classList.add('d-none');
  }
  /* function handleButtons() {
    let btn1 = document.getElementById('willdo');
    let btn2 = document.getElementById('doing');
    btn1.addEventListener('click', () => {
      btn1.classList.add('clicked');
      if (btn2.classList.contains('clicked')) btn2.classList.remove('clicked');
    });
    btn2.addEventListener('click', () => {
      btn2.classList.add('clicked');
      if (btn1.classList.contains('clicked')) btn1.classList.remove('clicked');
    });
  } */
  return (
    <div className="page">
      <button className="btn-add" onClick={handleModal}>
        <MdOutlineEditNote />
      </button>
      <main>
        <header>
          <h2 className="header-h">My TODOs</h2>
        </header>
        <div className="tags">
          <div className="row">
            <div className="col">
              <Link to="/today" className="today">
                <div className="btn-col">
                  <BsCalendar2DateFill className="tag-icon today" />
                  <p>Bugün</p>
                </div>
                <p className="btn-col">0</p>
              </Link>
              <Link to="/all" className="all">
                <div className="btn-col">
                  <FaInbox className="tag-icon all" />
                  <p>Tümü</p>
                </div>
                <p className="btn-col">0</p>
              </Link>
            </div>
            <div className="col">
              <Link to="/flagged" className="flaged">
                <div className="btn-col">
                  <FaFlag className="tag-icon flaged" />
                  <p>Bayraklı</p>
                </div>
                <p className="btn-col">0</p>
              </Link>
              <Link to="/completed" className="completed">
                <div className="btn-col">
                  <FaCheckCircle className="tag-icon completed" />
                  <p>Tamamlananlar</p>
                </div>
                <p className="btn-col"></p>
              </Link>
            </div>
          </div>
        </div>
        <div className="lists">
          <h2 className="">Listelerim</h2>
          <ul>
            <li>
              <Link to="/willdo">Yapacaklarım</Link>
            </li>
            <li>
              <Link className="last" to="/doing">
                Yapıyorum
              </Link>
            </li>
          </ul>
        </div>
        <div className="modal d-none" id="modal">
          <div className="rounded-pill"></div>
          <button className="closeModal" onClick={handleModal}>
            X
          </button>
          <div className="form">
            <input
              type="text"
              value={header}
              placeholder="Başlık"
              onChange={(e) => setHeader(e.target.value)}
            />
            <div className="list-div">
              <div>
                <div className="radio">
                  <input
                    type="radio"
                    id="option1"
                    name="option"
                    onClick={() => setList('willdo')}
                  />
                  <label for="option1"> Yapacaklarım</label>
                </div>
                <div className="radio">
                  <input
                    type="radio"
                    id="option2"
                    name="option"
                    onClick={() => setList('doing')}
                  />
                  <label for="option2"> Yapıyorum </label>
                </div>
              </div>
            </div>
            <button
              className="add"
              onClick={() => {
                handleAdd();
                handleModal();
              }}
            >
              Ekle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
