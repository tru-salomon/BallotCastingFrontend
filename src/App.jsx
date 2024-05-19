import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import HeightContext from './components/utils/HeightContext'
import './App.css'

function App() {
  const [height, setHeight] = useState(0)
  
  return (
    <>
      <Router>
        <Routes>
              <Route exact path="/login" element={<Login />} />
                    <Route path="/*" element={
            < HeightContext.Provider value={{ height, setHeight }}>
                    <div className="app-container">
                      <Sidebar />
                      <div className="content-container">
                        <SearchBar />
                        <Routes>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route exact path="/about" element={<About />} />
                        </Routes>
                      </div>
                    </div>
            </HeightContext.Provider>
                    }
          />
        </Routes>
          </Router>
    </>
  )
}

export default App
