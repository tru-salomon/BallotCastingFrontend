import { useContext, useEffect, useRef } from 'react'
import './SearchBar.css'
import HeightContext from './utils/HeightContext'

const SearchBar = () => {
  const { height } = useContext(HeightContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector('.sidebar-header');
      if (header && containerRef.current) {
        const exactHeight = header.getBoundingClientRect().height;
        containerRef.current.style.height = `${exactHeight - 1}px`;
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
},  [height]);



  return (
    <div ref={containerRef} className='searchbar-container'>
      <div className='searchbar'>
        <div className='searchbar-empty'></div>
        <div className='searchbar-input-container'>
          <input type='text' placeholder='Search...' />
        </div>
        <div className='searchbar-icons-container'>
          <a href='/settings'><i className='fa fa-fw fa-gear'></i></a>
         <a href='/notifications'><i className='fa fa-fw fa-bell'></i></a>
        </div>
      </div>

    </div>
  )
}

export default SearchBar