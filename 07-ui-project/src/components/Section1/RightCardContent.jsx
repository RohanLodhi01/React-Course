import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full  w-full  p-4 flex flex-col justify-between"> 
        <h2 className="bg-white  text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center">
          {props.id + 1}
        </h2>
        <div>
          <p className="text-shadow-2xs text-sm leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non
            reprehenderit minima, molestiae rerum illo.
          </p>
          <div className="flex justify-between">
            <button style={{backgroundColor:props.color}} className=" text-white font-medium px-4 py-1 rounded-full">{props.tag}</button>
            <button className="bg-blue-600 text-white font-medium px-2 py-1 rounded-full">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent