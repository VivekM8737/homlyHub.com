import React from 'react'
import Search from './Search'
import Filter from './Filter'

const Header = () => {
  return (
    <>
      <nav className='header row sticky-top '>
        <img src="./assets/logo.png" alt='logo' className='logo'></img>

        <div className='search-filter '>
          <Search />
        </div>
          <Filter/>
        <span className="material-symbols-outlined web_logo c_ptr">
          account_circle
        </span>
      </nav>
    </>
  )
}

export default Header
