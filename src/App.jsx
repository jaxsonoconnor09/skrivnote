// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Todo from "./components/Todo"
import About from "./components/About"
import Pomodoro from "./components/Pomodoro"
import Notes from './components/Notes'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/skrivnote/" element={<About />} />
        <Route path="/skrivnote/to-do" element={<Todo />} />
        <Route path="/skrivnote/pomodoro" element={<Pomodoro />} />
        <Route path="/skrivnote/notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}

export default App
