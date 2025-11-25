

// const App = () => {

//   const [user, setuser] = useState('Rohan')
//   const [Array, setArray] = useState([1,2,3])


//   function changeName(){
//     setuser('rohan lodhi')
//     setArray([4,5,6]);
//   }
//   return (
//     <div>
//       <h1>Name of user is {user} <br/> Array is {Array} </h1>
//       <button onClick={changeName}  >click</button>
//     </div>
//   )
// }


import React, { useState } from 'react'

const App = () => {
  const [num, setnum] = useState(0)
  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  function reset(){
    setnum(0)
  }
  return (
    <div>
      <h1>{num}</h1>
      <div className="button-container">
        <button onClick={increaseNum}>increase</button>
        <button onClick={decreaseNum}>decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
