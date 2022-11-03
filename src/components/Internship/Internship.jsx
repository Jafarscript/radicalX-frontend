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
          <div>
          <h3>Internship Insights</h3>
          <p>In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic.</p>
          </div>
        </article>
        <section className='chart'>
          <nav>
            <div className='btns'>
              <button>This week</button>
              <button>This month</button>
            </div>
            <button className='btn-date'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667303070/calendar-2_tifh1r.png" alt="" /> Select Date</button>
          </nav>
        </section>
      </div>
      <table className='wrapper'>
        <thead>
          <tr>
            <th>
              <div className='rowh'>Internship Title <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667303451/arrow-square-down_bmloz3.png" alt="" /></div>
            </th>
            <th>
              <div className='rowh'>
              Completion Period <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667303451/arrow-square-down_bmloz3.png" alt="" />
              </div>
            </th>
            <th>
              <div className='rowh'>
              Total Enrolled <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667303451/arrow-square-down_bmloz3.png" alt="" />
              </div>
            </th>
            <th>
              <div className='rowh'>
              Qualified Candidates <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667303451/arrow-square-down_bmloz3.png" alt="" />
              </div>
            </th>
            <th>Actions </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <h4>Product Design GVI</h4>
            <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
          </td>
          <td>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
          </td>
          <td className='enroll'>
            <p>20,000</p>
          </td>
          <td className='bar-chart'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667496935/Qualified_Candidates_acg5u5.png" alt="" /></td>
          <td>
            <div className="action">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305432/chart_xvjozy.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305433/profile-2user_aaxk1r.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305417/more-2_g4vx6s.png" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Product Design GVI</h4>
            <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
          </td>
          <td>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
          </td>
          <td className='enroll'>
            <p>20,000</p>
          </td>
          <td className='bar-chart'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667496935/Qualified_Candidates_acg5u5.png" alt="" /></td>
          <td>
            <div className="action">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305432/chart_xvjozy.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305433/profile-2user_aaxk1r.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305417/more-2_g4vx6s.png" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Product Design GVI</h4>
            <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
          </td>
          <td>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
          </td>
          <td className='enroll'>
            <p>20,000</p>
          </td>
          <td className='bar-chart'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667496935/Qualified_Candidates_acg5u5.png" alt="" /></td>
          <td>
            <div className="action">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305432/chart_xvjozy.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305433/profile-2user_aaxk1r.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305417/more-2_g4vx6s.png" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Product Design GVI</h4>
            <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
          </td>
          <td>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
          </td>
          <td className='enroll'>
            <p>20,000</p>
          </td>
          <td className='bar-chart'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667496935/Qualified_Candidates_acg5u5.png" alt="" /></td>
          <td>
            <div className="action">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305432/chart_xvjozy.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305433/profile-2user_aaxk1r.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305417/more-2_g4vx6s.png" alt="" />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <h4>Product Design GVI</h4>
            <p>Amet minim mollit non deserunt est sit aliqua dolor do amet sint. </p>
          </td>
          <td>
            <h4>120 days</h4>
            <p>(created on 10/12/2021)</p>
          </td>
          <td className='enroll'>
            <p>20,000</p>
          </td>
          <td className='bar-chart'> <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667496935/Qualified_Candidates_acg5u5.png" alt="" /></td>
          <td>
            <div className="action">
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305432/chart_xvjozy.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305433/profile-2user_aaxk1r.png" alt="" />
            <img src="https://res.cloudinary.com/dvo8xhx6r/image/upload/v1667305417/more-2_g4vx6s.png" alt="" />
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Internship