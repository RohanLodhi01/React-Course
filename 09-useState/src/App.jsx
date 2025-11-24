import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState('Rohan')
  const [Array, setArray] = useState([1,2,3])


  function changeName(){
    setuser('rohan lodhi')
    setArray([4,5,6]);
  }
  return (
    <div>
      <h1>Name of user is {user} <br/> Array is {Array} </h1>
      <button onClick={changeName}  >click</button>
    </div>
  )
}

export default App