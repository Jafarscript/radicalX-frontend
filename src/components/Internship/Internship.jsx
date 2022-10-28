import React from 'react'
import './Internship.css'

const Internship = ({toogleSelect}) => {
  return (
    <div className={toogleSelect === 3 ? 'active' : 'internTab'}>
      <header>
        <h2>Internships</h2>
        <button className='create'>
          <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1666950515/add-square_lqciya.png" alt="" />
          Create New Internship
        </button>
      </header>
    </div>
  )
}

export default Internship