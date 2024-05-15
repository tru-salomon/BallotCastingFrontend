import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
              <Route exact path="/login" element={<Login />} />
                    <Route path="/*" element={
                  <>
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
                      </>
                    }
          />
        </Routes>
          </Router>
    </>
  )
}

export default App
