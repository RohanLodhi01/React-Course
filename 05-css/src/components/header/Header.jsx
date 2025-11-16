import React from 'react'
import styles from './Header.module.css'
// import '../styles/Header.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Rohan</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header









// NOT TO PREFER THIS TYPE OF CSS

// const Header = () => {
//   return (
//     <div className='header'>
//       <h3>Rohan</h3>
//       <button className='btn'>Login</button>
//     </div>
//   )
// }

// export default Header