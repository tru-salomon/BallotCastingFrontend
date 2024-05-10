import logo from '../assets/BCS LOGO.png'; // adjust the path to match your project structure
import './Dashboard.css';

const Dashboard = () => {
  return (

    <div className="dashboard-container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="sidebar-container">
        <div className="sidebar">
          <img src={logo} alt="logo" />
          <div className='sidebar-nav-items'>
            <div className='nav-item'>
              <input type="text" placeholder="start new call" />
              <i className="fa fa-fw fa-plus"></i>
            </div>
            <div className='nav-item'>
              <a href="/dashboard"><i className="fa fa-fw fa-home"></i>Dashboard</a>
            </div>
            <div className='nav-item'>
              <a href="/analytics"><i className="fa fa-fw fa-bar-chart"></i>Analytics</a>
            </div>
            <div className='nav-item'>
              <a href="/pools"><i className="fa fa-fw fa-users"></i>Pool Groups</a>
            </div>
            <div className='nav-item'>
              <a href="/ballots"><i className="fa fa-fw fa-envelope"></i>Ballots</a>
              </div>
                <div className='nav-item'>
              <a href="/archives"><i className="fa fa-fw fa-archive"></i>Archives</a>
                </div>
              </div>
            </div>
          </div>
          <div>Dashboard</div>
          </div>
      )
}

      export default Dashboard