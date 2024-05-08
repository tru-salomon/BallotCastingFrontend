import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
