import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='rohan lodhi' age= {18} img="tennis-balls.png"/>
      <Card user='mohan' age= {18} img="https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"/>
    </div>
  )
}

export default App
App