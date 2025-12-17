import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/themeContext'

const Button = () => {
    const [theme,setTheme] = useContext(ThemeDataContext)
    const changeTheme = function(){
        setTheme('Dark')
    }
  return (
    <div >
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
