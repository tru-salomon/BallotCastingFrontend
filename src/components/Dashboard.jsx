import './Dashboard.css';
import Columnchart from './Columnchart';
import Piechart from './Piechart';
import ResultGrid from './ResultGrid';


const Dashboard = () => {
      return (

            <div className="dashboard-container">
                  <div className='dashboard'>
                        <div className='title-container'>Overview</div>
                        <div className='data-visualization-container'>
                              <div className='data-visualization'>
                                    <div className='bar-chart-container'>
                                          <div className='chart-title'>Ballots</div>
                                          <div className='chart-container'>
                                                <Columnchart />
                                          </div>
                                    </div>

                                    <div className='pie-chart-container'>
                                          <div className='chart-title'>Turnout</div>
                                          <div className='chart-container'>
                                                <Piechart />
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className='dashboard-feed-container'>

                              <div className='result-feed-container'>
                                    <div className='feed-title'>Current Call Preliminary Results</div>
                                    <div className='result-container'>
                                          <ResultGrid />
                                    </div>

                              </div>
                              <div className='activity-feed-container'>
                                    <div className='feed-title'>Activity Feed</div>
                                    <div className='activity-container'></div>
                              </div>

                        </div>
                  </div>

            </div>
      )
}

export default Dashboard