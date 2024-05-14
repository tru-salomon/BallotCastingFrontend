import { useState } from 'react';
import logo from '../assets/BCS LOGO.png'; 
import './Dashboard.css';
import  Sidebar from './Sidebar'

const Dashboard = () => {
  return (

    <div className="dashboard-container">
      <Sidebar />
          <div>Dashboard</div>
          </div>
      )
}

      export default Dashboard