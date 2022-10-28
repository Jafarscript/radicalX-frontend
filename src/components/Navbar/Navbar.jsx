import React from 'react'
import './Navbar.css'

const Navbar = ({toogleSelect,selected}) => {
  return (
    <div className='sideBar'>
        <div className='navBar'>
        <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666827914/RadicallX-Black-Logo_1_caprwu.png" alt="logo" className='logo' />
        <ul className='navList'>
            <li onClick={() => selected(1)} className={toogleSelect === 1 ? 'selected': ''}>
              <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666828234/dashboard-3_yov2lc.png" alt="" />
              <p>Dashboard</p>
            </li>
            <li onClick={() => selected(2)} className={toogleSelect === 2 ? 'selected': ''}>
              <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666828234/medal-star_grqvqc.png" alt="" />
              <p>Apprenterships</p>
            </li>
            <li onClick={() => selected(3)} className={toogleSelect === 3 ? 'selected': ''}>
              <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666828233/book_eqhm5i.png" alt="" />
              <p>Internship</p>
            </li>
            <li onClick={() => selected(4)} className={toogleSelect === 4 ? 'selected': ''}>
              <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666828233/briefcase_hzcyn6.png" alt="" />
              <p>Jobs</p>
            </li>
            <li onClick={() => selected(5)} className={toogleSelect === 5 ? 'selected': ''}>
              <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666828234/setting-2_kg11mn.png" alt="" />
              <p>Settings</p>
            </li>
        </ul>
        </div>
        <div className='navBottom'>
          <span></span>
          <h3>Adam Scott</h3>
        </div>
    </div>
  )
}

export default Navbar