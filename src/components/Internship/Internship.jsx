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
      <div className="insight">
        <article>
          <h3>Internship Insights</h3>
          <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</p>
        </article>
      </div>
    </div>
  )
}

export default Internship