import React from 'react'
import { Bookmark } from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>
      <div className='card'>

        <div className="top">
          <img src="https://crystalpng.com/wp-content/uploads/2025/05/google-logo.png" alt="" />
          <button>Save <Bookmark size={12} /></button>
        </div>

        <div className="center">

          <h3>Google <span>30 days ago</span></h3>
          <h2>Graphic Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Flexible Schedule</h4>
          </div>
        </div>
        <div className="bottom">
            <div>
              <h3>$150-220k</h3>
              <p>Kochi, India</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>

    </div>

  )
}

export default App
