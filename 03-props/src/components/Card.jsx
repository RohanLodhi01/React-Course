import React from 'react'

const Card = (props) => {
    console.log(props.user)
    return (
        <div className='card'>
            <img src={props.img} alt="" />
            <h1>{props.user},{props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, cum.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card
