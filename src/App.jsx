import { useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
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
      <GoogleOAuthProvider clientId="418396585347-igjetofqj580h7jf4cid6jam91eupmm5.apps.googleusercontent.com">
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
          }/>
        </Routes>
        </Router >
      </GoogleOAuthProvider>
    </>
  )
}

export default App
