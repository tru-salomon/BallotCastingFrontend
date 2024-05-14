import logo from '../assets/BCS LOGO.png';
import { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('/dashboard')

    const handleNavItemClick = (path) => {
        setActiveItem(path);
    }

    // const handleNewCallClick = () => {
    //   console.log("you started a new call")
    // }

    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="sidebar-container">
        <div className="sidebar">
          <div className='sidebar-header'>
            <img src={logo} alt="logo" />
            </div>
          <div className='sidebar-nav-items'>
            <div className='nav-item'>
              <input type="text" placeholder="start new call" />
             <a href="/newcall"><i className="fa fa-fw fa-plus plus"></i></a>
            </div>
            <div className={`nav-item ${activeItem === '/dashboard' ? 'active' : ''}`} onClick={() => handleNavItemClick('/dashboard')}>
              <a href="/dashboard"><i className="fa fa-fw fa-home"></i>Dashboard</a>
            </div>
            <div className={`nav-item ${activeItem === '/analytics' ? 'active' : ''}`} onClick={() => handleNavItemClick('/analytics')}>
              <a href="/analytics"><i className="fa fa-fw fa-bar-chart"></i>Analytics</a>
            </div>
            <div className={`nav-item ${activeItem === '/pools' ? 'active' : ''}`} onClick={() => handleNavItemClick('/pools')}>
              <a href="/pools"><i className="fa fa-fw fa-users"></i>Pool Groups</a>
            </div>
            <div className={`nav-item ${activeItem === '/ballots' ? 'active' : ''}`} onClick={() => handleNavItemClick('/ballots')}>
              <a href="/ballots"><i className="fa fa-fw fa-envelope"></i>Ballots</a>
              </div>
            <div className={`nav-item ${activeItem === '/archive' ? 'active' : ''}`} onClick={() => handleNavItemClick('/analytics')}>
              <a href="/archives"><i className="fa fa-fw fa-archive"></i>Archives</a>
            </div>
          </div>
          <div className='lower-sidebar'>
            <div className='empty'></div>
            <div className='lower-nav-item'>
              <a href='/settings'><i className='fa fw fa-gear' ></i>Settings</a>
            </div>
          </div>
          <div className='account-info-container'>
            <img className='avatar' src='./src/assets/avatar.png' alt='avatar' />
            <div className='account-info'>
              <div className='account-name'>John Doe</div>
              <div className='account-email'> email@example.org</div>
              </div>
          </div>
            </div>
            </div>
        </>
    )
}

export default Sidebar