import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa6";

export default function Nav() {
  const [selectedButton, setSelectedButton] = useState("home");

  const handleClick = (e) => {
    setSelectedButton(e.currentTarget.id);
  }

  return (
    <nav id="main-navbar">
      <Link to="/skrivnote" id="title" onClick={(e) => handleClick(e)}>skriv<span className="accent">note</span></Link>
      <span id="nav-buttons">
        <Link
          id="notes"
          to="/skrivnote/notes"
          className="nav-button hidden-on-mobile"
          onClick={(e) => handleClick(e)}
          style={{color: `var(--${selectedButton == "notes" ? "accent" : "text"})`,
                  textShadow: `0 0 10px var(--${selectedButton == "notes" ? "accent" : "transparent"})`}}
        >Notes</Link>
        <Link
          id="todo"
          to="/skrivnote/to-do"
          className="nav-button hidden-on-mobile"
          onClick={(e) => handleClick(e)}
          style={{color: `var(--${selectedButton == "todo" ? "accent" : "text"})`,
                  textShadow: `0 0 10px var(--${selectedButton == "todo" ? "accent" : "transparent"})`}}
        >To-do</Link>
        <Link
          id="pomodoro"
          to="/skrivnote/pomodoro"
          className="nav-button hidden-on-mobile"
          onClick={(e) => handleClick(e)}
          style={{color: `var(--${selectedButton == "pomodoro" ? "accent" : "text"})`,
                  textShadow: `0 0 10px var(--${selectedButton == "pomodoro" ? "accent" : "transparent"})`}}
        >Pomodoro</Link>

        <button id="menu-toggle" className="nav-button hidden-on-desktop"  onClick={() => {
          const menu = document.querySelector("#menu");
          menu.style.display="block";
        }}>
          <Icons.FaBars />
        </button>

        <div id="menu">
          <h1 className="header"><span className="header-highlight">Pages</span></h1>
          <button id="hide-menu" onClick={() => {
            const menu = document.querySelector("#menu");
            menu.style.display="none";
          }}>
            <Icons.FaX />
          </button>

          <div id="mobile-menu-buttons">
            <Link
              id="notes"
              to="/skrivnote/notes"
              className="nav-button"
              onClick={(e) => handleClick(e)}
              style={{color: `var(--${selectedButton == "notes" ? "accent" : "text"})`,
                      textShadow: `0 0 10px var(--${selectedButton == "notes" ? "accent" : "transparent"})`}}
            >Notes</Link>
            <Link
              id="todo"
              to="/skrivnote/to-do"
              className="nav-button"
              onClick={(e) => handleClick(e)}
              style={{color: `var(--${selectedButton == "todo" ? "accent" : "text"})`,
                      textShadow: `0 0 10px var(--${selectedButton == "todo" ? "accent" : "transparent"})`}}
            >To-do</Link>
            <Link
              id="pomodoro"
              to="/skrivnote/pomodoro"
              className="nav-button"
              onClick={(e) => handleClick(e)}
              style={{color: `var(--${selectedButton == "pomodoro" ? "accent" : "text"})`,
                      textShadow: `0 0 10px var(--${selectedButton == "pomodoro" ? "accent" : "transparent"})`}}
            >Pomodoro</Link>
          </div>
        </div>

      </span>
    </nav>
  )
}