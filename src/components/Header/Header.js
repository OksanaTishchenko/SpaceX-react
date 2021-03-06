import React from 'react';
import logo from '../../logo.svg';
import './Header.css';

const Header = (props) => (
  <header className="header">
    <img
      src={logo}
      alt="Logo Space X"
      className="logo"
    />
    <nav className="main-nav nav">
      <ul className="list">
        {props.rockets.map((item, index) => {
          return (
            <li key={index} className="item">
              <a href="/"
                onClick={e => {
                  e.preventDefault();
                  props.changeRocket(item);
                }}
                className="item-link">{item}</a>
            </li>
          )
        })}
        {/* <li className="item">
          <a href="/" className="item-link">Falcon 1</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Falcon 9</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Falcon Heavy</a>
        </li>
        <li className="item">
          <a href="/" className="item-link">Updates</a>
        </li> */}
      </ul>
    </nav>
    <nav className="secondary-nav">
      <ul className="list">
        <li className="item">
          <a href="/" className="item-link">Home</a>
        </li>
        <li className="item">
          <a href="calendar.html" className="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;